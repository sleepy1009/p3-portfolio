import { useEffect, useRef } from 'react';
import { SHARD_SHAPES } from '../../data/shards';


const TRAIL_LIFE = 220;      // ms: time fade out
const TRAIL_MAX_POINTS = 40;
const CORE_WIDTH = 7;        
const HALO_WIDTH = 13;       
const BURST_COUNT = 10;      // number of shards per click
const MAX_PARTICLES = 120;   // prevent overload on spam clicks
const DPR_CAP = 1.5;         // limit canvas resolution to keep performance smooth

// polygon(...) 0..1
const SHAPES = Object.values(SHARD_SHAPES).map((poly) =>
  poly
    .replace(/^polygon\(|\)$/g, '')
    .split(',')
    .map((pt) => pt.trim().split(/\s+/).map((v) => parseFloat(v) / 100))
);

export default function CursorFX() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // only mouse, offcourse
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!ctx || !finePointer || reduced) return;

    const css = getComputedStyle(document.documentElement);
    const tone = (n, fallback) => css.getPropertyValue(`--tone-${n}`).trim() || fallback;
    const CORE = tone(1, '#f8fafc');
    const HALO = tone(4, '#515355'); // tối để vệt vẫn thấy được trên khối trắng
    const COLORS = [tone(1, '#f8fafc'), tone(2, '#d9eafd'), tone(4, '#515355'), tone(4, '#515355')];

    let width = 0;
    let height = 0;
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, DPR_CAP);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    const trail = [];
    const particles = [];
    let raf = 0;
    let lastTime = 0;

    const ribbon = (now, maxWidth) => {
      const n = trail.length;
      const left = [];
      const right = [];
      for (let i = 0; i < n; i++) {
        const prev = trail[Math.max(0, i - 1)];
        const next = trail[Math.min(n - 1, i + 1)];
        const dx = next.x - prev.x;
        const dy = next.y - prev.y;
        const len = Math.hypot(dx, dy) || 1;
        const fade = Math.min(1, Math.max(0, 1 - (now - trail[i].t) / TRAIL_LIFE));
        const head = Math.min(1, (n - 1 - i) / 4 + 0.15);
        const half = (maxWidth / 2) * Math.pow(fade, 1.4) * head;
        const nx = (-dy / len) * half;
        const ny = (dx / len) * half;
        left.push([trail[i].x + nx, trail[i].y + ny]);
        right.push([trail[i].x - nx, trail[i].y - ny]);
      }
      ctx.beginPath();
      left.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)));
      for (let i = n - 1; i >= 0; i--) ctx.lineTo(right[i][0], right[i][1]);
      ctx.closePath();
    };

    const drawTrail = (now) => {
      if (trail.length < 2) return;
      ribbon(now, HALO_WIDTH);
      ctx.globalAlpha = 0.28;
      ctx.fillStyle = HALO;
      ctx.fill();
      ribbon(now, CORE_WIDTH);
      ctx.globalAlpha = 0.95;
      ctx.fillStyle = CORE;
      ctx.fill();
      ctx.globalAlpha = 1;
    };

    const drawParticles = (dt) => {
      const drag = Math.pow(0.04, dt);
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.age += dt * 1000;
        if (p.age >= p.life) {
          particles.splice(i, 1);
          continue;
        }
        p.vx *= drag;
        p.vy *= drag;
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.rot += p.vr * dt;

        const k = p.age / p.life;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.globalAlpha = 1 - k * k; 
        ctx.fillStyle = p.color;
        ctx.beginPath();
        p.shape.forEach(([sx, sy], j) => {
          const px = (sx - 0.5) * p.size;
          const py = (sy - 0.5) * p.size;
          if (j) ctx.lineTo(px, py);
          else ctx.moveTo(px, py);
        });
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      }
    };

    const frame = (now) => {
      raf = 0;
      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;

      ctx.clearRect(0, 0, width, height);
      while (trail.length && now - trail[0].t > TRAIL_LIFE) trail.shift();
      drawTrail(now);
      drawParticles(dt);

      if (trail.length > 1 || particles.length > 0) raf = requestAnimationFrame(frame);
    };

    const start = () => {
      if (!raf) {
        lastTime = performance.now();
        raf = requestAnimationFrame(frame);
      }
    };

    const burst = (x, y) => {
      if (particles.length > MAX_PARTICLES) return;
      for (let i = 0; i < BURST_COUNT; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 160 + Math.random() * 360; // px/s
        particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          rot: Math.random() * Math.PI * 2,
          vr: (Math.random() - 0.5) * 14,
          size: 4 + Math.random() * 6,            
          life: 320 + Math.random() * 280,        // ms:
          age: 0,
          shape: SHAPES[(Math.random() * SHAPES.length) | 0],
          color: COLORS[(Math.random() * COLORS.length) | 0],
        });
      }
    };

    const onMove = (e) => {
      if (e.pointerType === 'touch') return;
      const prevPoint = trail[trail.length - 1];
      if (prevPoint && Math.hypot(e.clientX - prevPoint.x, e.clientY - prevPoint.y) < 2) return;
      trail.push({ x: e.clientX, y: e.clientY, t: performance.now() });
      if (trail.length > TRAIL_MAX_POINTS) trail.shift();
      start();
    };

    const onDown = (e) => {
      if (e.pointerType === 'touch') return;
      const tag = e.target.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA') return;
      burst(e.clientX, e.clientY);
      start();
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('pointerdown', onDown, { passive: true });

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerdown', onDown);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[60] h-full w-full"
    />
  );
}
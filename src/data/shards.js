// true to show grid
export const SHOW_EDGE_POINTS = false;

// [t, dx]:
// t: default 0 upper left, 1 end (below)
// dx: move shape inside(-) or outside (+)
export const EDGE_POINTS = [
  [0.0, 0.0],
  [0.0, 0.0],
  [0.0, 0.0],
  [0.15, 1.0],
  [0.22, -2.0],
  [0.27, 0.2],
  [0.38, 0.0],
  [0.44, -2.0],
  [0.52, 0.8],
  [0.6, 0.0],
  [0.66, -1.0],
  [0.74, 0.0],
  [0.81, -0.0],
  [0.88, -2.6],
  [0.93, 0.4],
  [0.97, 0.0],
  [1.0, 0.0],
];

// clip-path polygon, draw in bennettfeely.com/clippy
export const SHARD_SHAPES = {
  tri: 'polygon(50% 0, 100% 100%, 0 80%)',
  blade: 'polygon(0 20%, 70% 0, 100% 60%, 30% 100%)',
  chip: 'polygon(20% 0, 100% 30%, 80% 100%, 0 70%)',
  spike: 'polygon(0 50%, 60% 0, 100% 45%, 55% 100%)',
};

// drifting shape
//   t = x
//   dist  =  (vw)  drift =  (vh, negative = rise)
//   rot   = angle  dur 
//   delay
export const SHARDS = [
  { t: 0.04, size: 2.2, shape: 'tri',   tone: 1, dist: 55, drift: -4, rot: 120,  dur: 18, delay: 0 },
  { t: 0.12, size: 1.2, shape: 'chip',  tone: 3, dist: 40, drift: 3,  rot: -90,  dur: 12, delay: 4 },
  { t: 0.22, size: 3.4, shape: 'blade', tone: 2, dist: 62, drift: -6, rot: 70,   dur: 26, delay: 9 },
  { t: 0.3,  size: 1.0, shape: 'spike', tone: 4, dist: 35, drift: 5,  rot: 200,  dur: 11, delay: 2 },
  { t: 0.45, size: 1.8, shape: 'tri',   tone: 1, dist: 50, drift: -3, rot: -140, dur: 16, delay: 7 },
  { t: 0.6,  size: 4.0, shape: 'blade', tone: 2, dist: 66, drift: 5,  rot: 60,   dur: 28, delay: 1 },
  { t: 0.64, size: 1.3, shape: 'chip',  tone: 3, dist: 42, drift: -5, rot: 160,  dur: 13, delay: 11 },
  { t: 0.75, size: 2.0, shape: 'spike', tone: 1, dist: 52, drift: 4,  rot: -100, dur: 17, delay: 5 },
  { t: 0.85, size: 1.0, shape: 'tri',   tone: 4, dist: 38, drift: -6, rot: 220,  dur: 10, delay: 8 },
  { t: 0.88, size: 4.6, shape: 'blade', tone: 1, dist: 70, drift: -4, rot: 45,   dur: 30, delay: 3 },
  { t: 0.97, size: 1.6, shape: 'chip',  tone: 3, dist: 46, drift: 3,  rot: -120, dur: 15, delay: 13 },
];
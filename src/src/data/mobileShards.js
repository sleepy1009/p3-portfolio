// Mảnh vỡ trôi trên mobile (từ cạnh chéo của dải kính, rơi xuống dưới)
//   t     = vị trí dọc theo cạnh chéo: 0 = trái, 1 = phải
//   size  = kích thước (px)
//   dx    = trôi ngang (vw)      dy = trôi xuống (vh)
//   rot   = góc xoay  dur = thời gian (s)  delay = trễ (s)
// shape / tone dùng lại SHARD_SHAPES và --tone-N của bản PC
export const MOBILE_SHARDS = [
  { t: 0.06, size: 10, shape: 'tri',   tone: 1, dx: 6,  dy: 70, rot: 120,  dur: 18, delay: 0 },
  { t: 0.20, size: 7,  shape: 'chip',  tone: 3, dx: -4, dy: 55, rot: -90,  dur: 13, delay: 4 },
  { t: 0.36, size: 16, shape: 'blade', tone: 2, dx: 8,  dy: 80, rot: 70,   dur: 26, delay: 9 },
  { t: 0.52, size: 8,  shape: 'spike', tone: 4, dx: -6, dy: 60, rot: 200,  dur: 14, delay: 2 },
  { t: 0.68, size: 12, shape: 'tri',   tone: 1, dx: 5,  dy: 75, rot: -140, dur: 20, delay: 7 },
  { t: 0.82, size: 20, shape: 'blade', tone: 1, dx: -8, dy: 85, rot: 45,   dur: 30, delay: 3 },
  { t: 0.94, size: 8,  shape: 'chip',  tone: 3, dx: 3,  dy: 60, rot: -120, dur: 15, delay: 11 },
];

// true to see grid
export const SHOW_CRACK_GRID = false;

// Hệ toạ độ (đơn vị gần như "vw"):
// x,y (start upper left)
// each crack:
//   points   = [x, y]
//   laser    = true / fasle
//   laserLen = default 14
//   dur      = 40% run
export const CRACKS = [
  // main crack
  {
    points: [[5, 0], [4.2, 6], [9.5, 11], [13.5, 17], [12, 23], [16, 29], [15, 36], [19.5, 43], [18, 49], [23, 56.25]],
    width: 0.2, laser: true, laserLen: 16, dur: 8, delay: 0,
  },

  {
    points: [[0, 48], [3, 45], [3, 35], [6, 32]],
    width: 0.2, laser: true, laserLen: 16, dur: 8, delay: 0,
  },
  
  
  { points: [[13.5, 17], [17, 18.5], [18.2, 16.5]], width: 0.12 },
  { points: [[12, 23], [8.5, 26], [7, 31]], width: 0.12 },
  { points: [[16, 29], [19.5, 31], [21, 35]], width: 0.12 },
  { points: [[30, 46], [33, 43.5], [34.5, 44.5]], width: 0.12 },

  { points: [[2, 46], [1, 43.5]], width: 0.12 },
  { points: [[4, 34], [2.5, 32]], width: 0.12 },
  { points: [[5.25, 33], [7, 34]], width: 0.12 },
];
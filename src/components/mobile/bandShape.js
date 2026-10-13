import { EDGE_POINTS } from '../../data/shards';

// same pc
export const JAG = 5;

const outerY = (f, j) => `calc(100% - var(--m-slope) * ${f} + var(--u) * ${j})`;
const bandY = (f, j) => `calc(100% - var(--m-out) - var(--m-slope) * ${f} + var(--u) * ${j})`;
const pageY = (f, j) => `calc(var(--m-e1) - var(--m-slope) * ${f} + var(--u) * ${j})`;
const pieceY = (f, j) => `calc(var(--m-e1) + var(--m-split) - var(--m-slope) * ${f} + var(--u) * ${j} - 2px)`;

const points = (yFn) =>
  EDGE_POINTS.map(([t, dx]) => {
    const f = +(1 - t).toFixed(4);
    return `${(f * 100).toFixed(2)}% ${yFn(f, +(dx * JAG).toFixed(2))}`;
  }).join(', ');

export const OUTER_CLIP = `polygon(0 0, 100% 0, ${points(outerY)})`;
export const BAND_CLIP = `polygon(0 0, 100% 0, ${points(bandY)})`;
export const CRACK_CLIP = `polygon(0 0, 100% 0, ${points(pageY)})`;
export const PIECE_CLIP = `polygon(${points(pieceY)}, 0 100%, 100% 100%)`;

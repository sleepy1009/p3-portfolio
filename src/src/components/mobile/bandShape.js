import { EDGE_POINTS } from '../../data/shards';

// Cạnh vỡ của dải kính mobile = cạnh vỡ của bản PC (EDGE_POINTS) xoay 90°.
//   - t (PC: trên -> dưới)  =>  mobile: phải -> trái
//   - dx dương (PC: dải kính dày thêm) => mobile: cạnh đi xuống
// JAG: 1 đơn vị dx của PC (vw) = JAG đơn vị --u trên mobile.
//   Tăng JAG = cạnh gồ ghề hơn, đặt 0 = cạnh thẳng.
export const JAG = 5;

// y theo toạ độ tương đối so với đáy của mảng trắng (mảng này kéo dài 60dvh lên trên)
const outerY = (f, j) => `calc(100% - var(--m-slope) * ${f} + var(--u) * ${j})`;
const bandY = (f, j) => `calc(100% - var(--m-out) - var(--m-slope) * ${f} + var(--u) * ${j})`;
// y theo toạ độ trang (đỉnh header = 0)
const pageY = (f, j) => `calc(var(--m-e1) - var(--m-slope) * ${f} + var(--u) * ${j})`;
// mảng kính phía dưới của intro: cùng cạnh vỡ, dịch xuống --m-split
const pieceY = (f, j) => `calc(var(--m-e1) + var(--m-split) - var(--m-slope) * ${f} + var(--u) * ${j} - 2px)`;

// f = vị trí ngang 0..1 (0 = trái), j = độ lệch gồ ghề
const points = (yFn) =>
  EDGE_POINTS.map(([t, dx]) => {
    const f = +(1 - t).toFixed(4);
    return `${(f * 100).toFixed(2)}% ${yFn(f, +(dx * JAG).toFixed(2))}`;
  }).join(', ');

export const OUTER_CLIP = `polygon(0 0, 100% 0, ${points(outerY)})`;
export const BAND_CLIP = `polygon(0 0, 100% 0, ${points(bandY)})`;
export const CRACK_CLIP = `polygon(0 0, 100% 0, ${points(pageY)})`;
export const PIECE_CLIP = `polygon(${points(pieceY)}, 0 100%, 100% 100%)`;

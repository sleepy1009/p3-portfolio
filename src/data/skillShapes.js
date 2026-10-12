export const SLOT_SHAPE = 'hex';   // hex' | 'diamond' | 'chamfer' | 'shard'

const CHAMFER =
  'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))';

export const SLOT_SHAPES = {
  hex: 'polygon(25% 0, 75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%)',
  diamond: 'polygon(50% 0, 100% 50%, 50% 100%, 0 50%)',
  chamfer: CHAMFER,
  shard: 'polygon(10% 0, 100% 14%, 90% 100%, 0 84%)',
};

//   x: "calc(100% - 16px)" = how far from right edeg?
export const PLATE_BREAKS = [
  'polygon(0 0, calc(100% - 16px) 0, calc(100% - 10px) 28%, calc(100% - 18px) 42%, 100% 58%, calc(100% - 8px) 100%, 0 100%)',
  'polygon(0 0, calc(100% - 6px) 0, 100% 35%, calc(100% - 13px) 52%, calc(100% - 4px) 100%, 0 100%)',
  'polygon(0 0, 100% 0, calc(100% - 9px) 38%, calc(100% - 16px) 55%, calc(100% - 7px) 78%, calc(100% - 18px) 100%, 0 100%)',
  'polygon(0 0, calc(100% - 12px) 0, calc(100% - 4px) 22%, calc(100% - 14px) 60%, 100% 82%, calc(100% - 6px) 100%, 0 100%)',
];

// 'varied' A -> B -> C -> D -> A ->....
export const PLATE_BREAK = 'varied';
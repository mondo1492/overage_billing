export const round = num => (
  Math.round(num * 100) / 100
);

export const commaFormat = num => (
  num.toLocaleString()
);

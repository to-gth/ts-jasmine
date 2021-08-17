
const correctedCenter = (last: number, current: number, size: number) => {
  const first = 1;
  const leftLimit = first + size + 1;
  if (current < leftLimit) return leftLimit;
  const rightLimit = last - size - 1;
  if (current > rightLimit) return rightLimit;
  return current;
}

const serialNumbers = (size, start) => {
  return Array(size).fill(start).map((v, i) => v + i);
}

export const getPages = (length: number, currentPage: number, size: number): number[] => {
  if (length === 1) return [];
  const width = size + 1 + size;
  if (length <= width) return serialNumbers(length, 1);
  const center = correctedCenter(length, currentPage, size)
  const around = serialNumbers(width, center - size);
  return [1, ...around, length];
};

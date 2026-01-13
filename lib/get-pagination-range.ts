export function getPaginationRange(
  current: number,
  total: number,
  maxVisible: number
) {
  const half = Math.floor(maxVisible / 2);

  let start = Math.max(current - half, 1);
  let end = start + maxVisible - 1;

  if (end > total) {
    end = total;
    start = Math.max(end - maxVisible + 1, 1);
  }

  return { start, end };
}

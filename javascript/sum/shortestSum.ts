export const shortestSum = (nums: number[], target: number, memo: Record<number, number[] | null> = {}): number[] | null => {
  if (target in memo) { return memo[target]; }
  if (target === 0) { return []; }
  if (target < 0) { return null; }

  let best: null | number[] = null;

  for (let number of nums) {
    const remainder = target - number;
    const result = shortestSum(nums, remainder, memo);

    if (result) {
      const currentCombo = [number, ...result];
      if (!best || currentCombo.length < best.length) {
        best = currentCombo;
      }
    }
  }

  memo[target] = best;
  return memo[target];
}
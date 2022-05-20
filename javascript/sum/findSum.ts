export const findSum = (nums: number[], target: number, memo: Record<number, number[] | null> = {}): number[] | null => {
  if (target in memo) { return memo[target]; }
  if (target === 0) { return []; }
  if (target < 0) { return null; }

  for (let number of nums) {
    const remainder = target - number;
    const result = findSum(nums, remainder, memo);
    if (result) {
      memo[target] = [number, ...result];
      return memo[target];
    }
  }

  memo[target] = null;
  return memo[target];
}
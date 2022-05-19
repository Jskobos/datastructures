import { numberTypeAnnotation } from "@babel/types";

export const canSum = (nums: number[], target: number): boolean => {
  return _canSum(nums, target, {});
}

const _canSum = (nums: number[], target: number, memo: Record<string, boolean> = {}): boolean => {
  if (target in memo) { return memo[target]; }
  if (target === 0) { return true; }
  if (target < 0) { return false; }

  for (let number of nums) {
    const remainder = target - number;
    if (_canSum(nums, remainder, memo)) {
      memo[target] = true;
      return true
    };
  }
  memo[target] = false;
  return false;
}
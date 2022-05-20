import { canSum } from './canSum';
import { findSum } from './findSum';

describe("Sum exercises", () => {
  describe("Can sum", () => {
    it("should return true if the provided numbers can sum to the target", () => {
      expect(canSum([1, 2, 3], 5)).toBe(true);
      expect(canSum([1], 300)).toBe(true);
    });

    it("should return false if the provided numbers can't sum to the target", () => {
      expect(canSum([3, 6], 5)).toBe(false);
      expect(canSum([4, 2, 6], 333)).toBe(false);
    });

    it("should handle edge cases", () => {
      expect(canSum([], 0)).toBe(true);
      expect(canSum([1, 2, 3], 0)).toBe(true);
    })
  });

  describe("findSum", () => {
    it("should find a set of numbers that generate the target sum", () => {
      expect(findSum([3, 5, 10], 8)).toEqual([3, 5]);
    });

    it("should return null if the sum is impossible given the provided numbers", () => {
      expect(findSum([2, 4, 6, 8, 10], 7)).toBeNull();
    });

    it("should handle large sets", () => {
      expect(findSum([4, 2, 6], 333)).toBeNull();
    })
  })
});
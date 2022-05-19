import { canSum } from './canSum';

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
  })

});
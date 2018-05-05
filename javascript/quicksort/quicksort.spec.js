import quickSort from './quickSort';

describe("quickSort: ", () => {
	it("should return an empty array unchanged", () => {
		expect(quickSort([])).toEqual([]);
	});

	it("should return a single-element array unchanged", () => {
		expect(quickSort([1])).toEqual([1]);
	});

	it("should sort an array", () => {
		expect(quickSort([3,2,1])).toEqual([1,2,3]);
	});
});

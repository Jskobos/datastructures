import mergeSort from './mergesort';

describe("Mergesort: ", () => {
	it("should return an empty array unchanged", () => {
		expect(mergeSort([])).toEqual([]);
	});

	it("should return a single-element array unchanged", () => {
		expect(mergeSort([1])).toEqual([1]);
	});

	it("should sort an array", () => {
		expect(mergeSort([3,2,1])).toEqual([1,2,3]);
	});
});

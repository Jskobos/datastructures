import quickSort from './quicksort/quicksort';
import mergeSort from './mergesort/mergeSort';

const sorts = [quickSort, mergeSort];

sorts.forEach((sort) => {
    describe("Sort: " , () => {
        it("should return an empty array unchanged", () => {
            expect(sort([])).toEqual([]);
        });
    
        it("should return a single-element array unchanged", () => {
            expect(sort([1])).toEqual([1]);
        });
    
        it("should sort an array", () => {
            expect(sort([3,2,1])).toEqual([1,2,3]);
        });
        it("should sort an array with repeated elements", () => {
            const testArr = [3,6,9,2,4,2,7,8,1,5,1];
            expect(sort(testArr)).toEqual(testArr.slice(0).sort());
        });
        it("should sort anything that is comparable", () => {
            const testArr2 = 'thequickbrownfoxjumpedoverthelazydog'.split('');
            expect(sort(testArr2)).toEqual(testArr2.slice(0).sort());
            expect(sort(['b','d','a','c'])).toEqual(['a','b','c','d']);
        });
    });
});
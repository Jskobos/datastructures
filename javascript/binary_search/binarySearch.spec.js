import BinarySearch from './binarySearch';

const testArr = ['apple','banana','cat','help','slow','stop','zoo'];
const s = new BinarySearch(testArr);


describe("Binary search:", () => {
    it("Should locate an element in an array.", () => {
        expect(s.search('cat')).toEqual(2);
    });
    it("Should locate an element in an array.", () => {
        expect(s.search('zoo')).toEqual(6);
    });
    it("Should return false if the element isn't found", () => {
        expect(s.search('flag')).toEqual(false);
    })
});
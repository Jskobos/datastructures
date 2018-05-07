import permutation from './permutation';

describe("Heap's algorithm for permutations", () => {
    it("should return all permutations of a string", () => {
        expect(permutation('cat').sort()).toEqual(['cat','act','tca','cta','tac','atc'].sort());
    });
});
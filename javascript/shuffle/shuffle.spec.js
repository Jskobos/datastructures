import shuffle from './shuffle';

describe("shuffling an array", () => {
    it("should do some shuffling", () => {
        const shuffled = shuffle('arandomstringofcharacters'.split(''));
        //console.log(shuffled);
        expect(shuffled).not.toEqual('arandomstringofcharacters'.split(''));
    });
});
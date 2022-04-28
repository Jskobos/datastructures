import { BinarySearchTree } from './binarySearchTree';

describe("BinarySearchTree", () => {
  it("should create a BST", () => {
    const tree = new BinarySearchTree<number>();
    tree.put(3);
    expect(tree.root!.value).toBe(3);
    tree.put(4);
    console.log(tree);
  })
});
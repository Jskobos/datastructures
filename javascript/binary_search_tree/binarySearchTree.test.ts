import { BinarySearchTree } from './binarySearchTree';

describe("BinarySearchTree", () => {
  it("should create a BST", () => {
    const tree = new BinarySearchTree<number>();
    tree.put(3);
  })
});
import { BinarySearchTree } from "./binarySearchTree";

describe("BinarySearchTree", () => {
  it("should create a BST", () => {
    const tree = new BinarySearchTree<number>();
    expect(tree.root).toBeNull();
  });

  it("should add items to a BST", () => {
    const tree = new BinarySearchTree<number>();
    tree.put(5);
    expect(tree.root!.value).toBe(5);
  });

  it("should build the tree correctly", () => {
    const tree = new BinarySearchTree<number>();
    [5, 6, 4, 2, 8, 6, 11].forEach((value) => tree.put(value));
  });

  it("should retrieve a value if it exists in the tree", () => {
    const tree = new BinarySearchTree<number>();
    [5, 6, 4, 2, 8, 6, 11].forEach((value) => tree.put(value));
    expect(tree.get(6)).toBe(6);
  });
});

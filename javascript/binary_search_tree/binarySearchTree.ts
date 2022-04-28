interface Node<T> {
  value: T | null;
  left: Node<T> | null;
  right: Node<T> | null;
}

const node = <T>(value: T | null): Node<T> => {
  return {
    value,
    left: null,
    right: null
  }
}

export class BinarySearchTree<T> {
  root: Node<T>;

  constructor() {
    this.root = node<T>(null);
  }

  get(value: T) {

  }

  put(value: T, root: Node<T> = this.root) {
    if (root.value === null) {
      root = node<T>(value);
    }
    else if (value > root.value) {
      root.right ? this.put(value, root.right) : root.right = node<T>(value);
    }
    else if (value < root.value) {
      root.left ? this.put(value, root.left) : root.left = node<T>(value);
    }
    else {
      root.value = value
    }
    console.log(this);
  }
}
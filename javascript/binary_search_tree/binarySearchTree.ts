interface Node<T> {
  value: T;
  left: Node<T> | null;
  right: Node<T> | null;
}

const newNode = <T>(value: T): Node<T> => {
  return {
    value,
    left: null,
    right: null,
  };
};

export class BinarySearchTree<T> {
  root: Node<T> | null;

  constructor() {
    this.root = null;
  }

  get(value: T) {
    return this._get(value, this.root);
  }
  _get(value: T, node: Node<T> | null): T | null {
    if (node === null) {
      return null;
    } else if (value > node.value) {
      return this._get(value, node.right);
    } else if (value < node.value) {
      return this._get(value, node.left);
    } else {
      return node.value;
    }
  }

  put(value: T) {
    this.root = this._put(this.root, value);
  }

  _put(node: Node<T> | null, value: T): Node<T> {
    if (node === null) {
      return newNode<T>(value);
    } else if (value > node.value) {
      node.right = this._put(node.right, value);
    } else if (value < node.value) {
      node.left = this._put(node.left, value);
    } else {
      node.value = value;
    }
    return node;
  }
}

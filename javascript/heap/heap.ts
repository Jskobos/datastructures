export default class Heap {
  data: number[] = [];
  N: number = 0;
  constructor(input: number[] = []) {
    for (let i = 0; i < input.length; i++) {
      this.insert(input[i]);
    }
  }

  insert(value: number) {
    this.data[++this.N] = value;
    this.swim(this.N)
  }

  delMax() {
    const max = this.data[1];
    this.swap(1, this.N--);
    this.sink(1);
    return max;
  }

  sink(idx: number) {
    let i = idx;
    while (2 * i <= this.N) {
      let j = 2 * i;
      if (j < this.N && this.less(j, j + 1)) { j++ }
      if (!this.less(i, j)) { break; }
      this.swap(i, j);
      i = j;
    }
  }

  swim(idx: number) {
    let i = idx;
    while (i > 1 && this.less(Math.trunc(i / 2), i)) {
      console.log(Math.trunc(i / 2))
      this.swap(Math.trunc(i / 2), i);
      i = Math.trunc(i / 2);
    }
  }

  isEmpty() {
    return this.N === 0;
  }

  // Helpers
  swap(x: number, y: number) {
    const tmp = this.data[x];
    this.data[x] = this.data[y];
    this.data[y] = tmp;
  }

  less(x: number, y: number) {
    return this.data[x] < this.data[y];
  }

}
const p = 53; // Low-ish prime number
type N = ListNode | null;
export class Hash {
  arr: N[] = Array(10).fill(null);
  m: number = 10;
  hash(s: string) {
    let hash = 0;
    for (let i = 0; i < s.length; i++) {
      hash += s.charCodeAt(i) * p ** i;
    }
    return hash % 10;
  }
  put(k: string, v: string) {
    const hash = this.hash(k);
    for (let n: ListNode | null = this.arr[hash]; n !== null; n = n.next) {
      if (n.k === k) {
        n.value = v;
        return;
      }
    }
    this.arr[hash] = new ListNode(k, v, this.arr[hash]);
  }
  get(k: string): string | false {
    const hash = this.hash(k);
    for (let n: ListNode | null = this.arr[hash]; n !== null; n = n.next) {
      if (n.k === k) {
        return n.value;
      }
    }
    return false;
  }
}

class ListNode {
  k: string | null;
  value: string;
  next: ListNode | null;

  constructor(k: string, value: string, next: ListNode | null = null,) {
    this.value = value;
    this.k = k;
    this.next = next;
  }
}
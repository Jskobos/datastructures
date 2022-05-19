import Heap from './heap';

describe('Heap data structure', () => {
  it('should insert into a heap', () => {
    const heap = new Heap();
    expect(heap.isEmpty()).toBe(true);
    heap.insert(5);
    expect(heap.isEmpty()).toBe(false);
    expect(heap.delMax()).toBe(5);
    expect(heap.isEmpty()).toBe(true);
  })

  it('should return the max value', () => {
    const heap = new Heap([4, 7, 3, 1, 8, 3, -1]);
    console.log(heap.data);
    expect(heap.delMax()).toBe(8);
  });
});
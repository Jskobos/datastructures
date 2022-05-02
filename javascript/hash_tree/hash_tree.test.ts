import { Hash } from './hash_tree';

describe("Hashmap implementation", () => {
  it("should be able to hash a string", () => {
    const h = new Hash();
    const hash = h.hash('abc');
    expect(hash).toBeGreaterThanOrEqual(0);
    expect(hash).toBeLessThanOrEqual(10);
  })
  it("should store a key/value pair", () => {
    const h = new Hash();
    h.put('a', 'apple');
    h.put('b', 'bear');
    h.put('c', 'cake');
    h.put('b', 'bread');
    expect(h.get('a')).toBe('apple');
    expect(h.get('b')).toBe('bread');
    expect(h.get('c')).toBe('cake');
    expect(h.get('z')).toBe(false);
  });
})
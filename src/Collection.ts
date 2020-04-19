export interface Collection<V> {
  count(): number;
  [Symbol.iterator](): V;
}

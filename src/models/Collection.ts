export interface Collection<V> {
  add(item: V): void;
  clear(): void;
  contains(item: V): boolean;
  remove(index: number): void;
  Items: V[] | V;
}

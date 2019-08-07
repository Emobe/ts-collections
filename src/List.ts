import { Collection } from "./Collection";

export class List<T> implements Collection<T> {
  private items: T[] = [];
  constructor(items?: T[]) {
    if (items) {
      this.items.push(...items);
    }
  }
  add(item: T): void {
    this.items.push(item);
  }
  clear(): void {
    this.items = [];
  }
  contains(item: T): boolean {
    for (const i of this.items) {
      if (i === item) {
        return true;
      }
    }
    return false;
  }
  remove(index: number): void {
    this.items.splice(index, 1);
  }

  get Items() {
    return this.items;
  }
}

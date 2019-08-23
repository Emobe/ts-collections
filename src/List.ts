import { onErrorResumeNext } from "rxjs";

export class List<V> {
  private items: V[] = [];
  /**
   * @param items - Items to set initial data
   */
  constructor(items?: V[]) {
    if (items) {
      this.items.push(...items);
    }
  }
  /**
   * Adds item to the list
   * @param item The item to add to the list
   */
  add(item: V): void {
    this.items.push(item);
  }
  /**
   * Insert item at specified index. The elements that follow the insertion point move down to accommodate the new element
   * @param index
   * @param item
   */
  insert(index: number, item: V) {
    this.items.splice(index, 0, item);
  }
  /**
   * Clears the dictionary
   */
  clear(): void {
    this.items = [];
  }
  /**
   * Check if the dictionary contains item
   * @param item The item to check if element exists at
   * @return `true` if element exists in the dictionary, otherwise returns `false`
   */
  contains(item: V): boolean {
    for (const i of this.items) {
      if (i === item) {
        return true;
      }
    }
    return false;
  }
  /**
   * Removes first occurance of the element
   * @param item
   * @returns `true` if the element existed and was removed, otherwise `false` is returned
   */
  remove(itemToRemove: V): boolean {
    return this.items.some((item, index) => {
      if (itemToRemove === item) {
        this.items.splice(index, 1);
        return true;
      }
    });
  }
  /**
   * Remove item at the specified index
   * @param index Index to remove element at
   */
  removeAt(index: number) {
    this.items.splice(index, 1);
  }
  get Items() {
    return this.items;
  }

  [Symbol.iterator]() {
    return this.items.values();
  }
}

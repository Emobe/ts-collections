export class List<T> {
  private items: T[] = [];
  /**
   * @param items - Items to set initial data
   */
  constructor(items?: T[]) {
    if (items) {
      this.items.push(...items);
    }
  }
  /**
   * Adds item to the list
   * @param item The item to add to the list
   */
  add(item: T): void {
    this.items.push(item);
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
  contains(item: T): boolean {
    for (const i of this.items) {
      if (i === item) {
        return true;
      }
    }
    return false;
  }
  /**
   * Remove element from the dictionary
   * @param index The index of the element to remove from the list
   * @returns `true` if the element existed and was removed, otherwise `false` is returned
   */
  remove(index: number): void {
    this.items.splice(index, 1);
  }
  get Items() {
    return this.items;
  }
}

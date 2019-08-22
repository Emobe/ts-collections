import { Observable, BehaviorSubject, merge } from "rxjs";
import { KeyPair } from "./KeyPair";

export class ObservableDictionary<V> {
  items$: Observable<KeyPair<V>>;
  private items: BehaviorSubject<KeyPair<V>>;
  /**
   *
   * @param items Items to add to the dictionary upon initialisation
   */
  constructor(items?: KeyPair<V>) {
    let initial;
    if (items) {
      initial = Object.assign({}, items);
    } else {
      initial = {};
    }
    this.items = new BehaviorSubject<KeyPair<V>>(initial);
    this.items$ = this.items.asObservable();
  }
  /**
   * Adds item to the dictionary
   * @param item  Item to add to dictionary
   * @returns `true` if item was added to the dictionary, otherwise returns `false`
   */
  add(item: KeyPair<V>): void;
  /**
   * Adds item to the dictionary
   * @param key The key which will be used to access the item
   * @param value The item to add to the dictionary
   * @returns `true` if item was added to the dictionary, otherwise returns `false`
   */
  add(key: string, value: V): boolean;
  add(key: any, value?: any) {
    if (this.items.value[key]) {
      return false;
    }
    this.update({ [key]: value });
    return true;
  }
  /**
   * Clears the dictionary
   */
  clear(): void {
    this.update({});
  }
  /**
   * Access item from the dictionary
   * @param key The key of the item to return from the dictionary
   * @return Returns item if exists at the specified key, otherwise `undefined`
   */
  get(key: string): V {
    return this.items.value[key];
  }
  /**
   * Check if the dictionary contains key
   * @param key The key to check if element exists at
   * @return `true` if a value is associated with specified key in the dictionary, otherwise returns `false`
   */
  containsKey(key: string): boolean {
    for (const k in this.items.value) {
      if (k === key) {
        return true;
      }
    }
    return false;
  }
  /**
   * Check if the dictionary contains key
   * @param value The value to check if exists in the dictionary
   * @return `true` if the value exists in the dictionary, otherwise returns `false`
   */
  containsValue(value: V): boolean {
    for (const v of Object.keys(this.items.value)) {
      if (this.items.value[v] === value) {
        return true;
      }
    }
    return false;
  }
  /**
   * Remove element from the dictionary
   * @param key The key of the element to remove from the dictionary
   * @returns `true` if the element existed and was removed, otherwise `false` is returned
   */
  remove(key: string): boolean;
  /**
   * Remove element from the dictionary
   * @param index The index of the element to remove from the dictionary. Not reccomended as element order cannot be guaranteed.
   * @returns `true` if the element existed and was removed, otherwise `false` is returned
   */
  remove(index: number): boolean;
  remove(key: any) {
    if (this.items.value[key]) {
      delete this.items.value[key];
      return true;
    }
    return false;
  }
  contains(item: KeyPair<V>): boolean {
    throw new Error("Method not implemented.");
  }

  get Items(): KeyPair<V> {
    return this.items.value;
  }

  private update(value: KeyPair<V>) {
    this.items.next(Object.assign(this.items.value, value));
  }
}

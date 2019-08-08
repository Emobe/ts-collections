import { Collection } from "../models/Collection";
import { DictionaryCollection, KeyPair } from "../models/DictionaryCollection";

export class Dictionary<V> implements DictionaryCollection<V> {
  private items: KeyPair<V> = {};
  constructor(...items: KeyPair<V>[]) {
    if (items) {
      Object.assign(this.items, ...items);
    }
  }
  add(item: KeyPair<V>): void;
  add(key: string, value: V): boolean;
  add(key: any, value?: any) {
    if (this.items[key]) {
      return false;
    }
    this.update({ [key]: value });
    return true;
  }
  clear(): void {
    this.update({});
  }
  containsKey(key: string): boolean {
    for (const k in this.items) {
      if (k === key) {
        return true;
      }
    }
    return false;
  }
  containsValue(value: V): boolean {
    for (const v of Object.keys(this.items)) {
      if (this.items[v] === value) {
        return true;
      }
    }
    return false;
  }
  remove(key: string): boolean;
  remove(index: number): void;
  remove(key: any) {
    if (this.items[key]) {
      delete this.items[key];
      return true;
    }
    return false;
  }
  public get Items() {
    return this.items;
  }
  contains(item: KeyPair<V>): boolean {
    throw new Error("Method not implemented.");
  }

  private update(value: KeyPair<V>) {
    Object.assign(this.items, value);
  }
}

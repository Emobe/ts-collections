import { Collection } from "../models/Collection";
import { DictionaryCollection, KeyPair } from "../models/DictionaryCollection";
import { ObservableDictionaryCollection } from "../models/ObservableDictionaryCollection";
import { Observable, BehaviorSubject, merge } from "rxjs";

export class ObservableDictionary<V>
  implements ObservableDictionaryCollection<V> {
  items$: Observable<KeyPair<V>>;
  private items: BehaviorSubject<KeyPair<V>>;
  constructor(...items: KeyPair<V>[]) {
    let initial;
    if (items) {
      initial = Object.assign({}, ...items);
    } else {
      initial = null;
    }
    this.items = new BehaviorSubject<KeyPair<V>>(initial);
    this.items$ = this.items.asObservable();
  }
  add(item: KeyPair<V>): void;
  add(key: string, value: V): boolean;
  add(key: any, value?: any) {
    if (this.items.value[key]) {
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
      if (this.items.value[v] === value) {
        return true;
      }
    }
    return false;
  }
  remove(key: string): boolean;
  remove(index: number): void;
  remove(key: any) {
    if (this.items.value[key]) {
      delete this.items.value[key];
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

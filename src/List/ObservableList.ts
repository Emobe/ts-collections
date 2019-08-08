import { ObservableCollection } from "../models/ObservableCollection";
import { Observable, BehaviorSubject } from "rxjs";

export class ObservableList<T> implements ObservableCollection<T> {
  public items$: Observable<T[]>;
  private items: BehaviorSubject<T[]>;
  constructor(initialValue: T[] = []) {
    this.items = new BehaviorSubject<T[]>(initialValue);
    this.items$ = this.items.asObservable();
  }
  add(item: T): void {
    const items = this.items.value;
    items.push(item);
    this.update(items);
  }
  clear(): void {
    this.update([]);
  }
  contains(item: T): boolean {
    for (const i of this.items.value) {
      if (i === item) {
        return true;
      }
    }
    return false;
  }
  remove(index: number): void {
    const items = this.items.value;
    items.splice(index, 1);
    this.update(items);
  }
  private update(value: T[]) {
    this.items.next(value);
  }
  public get asArray() {
    return this.items.value;
  }
}

import Dictionary from "./Dictionary";
import { BehaviorSubject } from "rxjs";
import { skip } from "rxjs/operators";

export default class ObservableDictionary<K, V> extends Dictionary<K, V> {
  private subject = new BehaviorSubject<Map<K, V>>(this.Items);
  public items$ = this.subject.asObservable().pipe(skip(1));

  /**
   * Adds item to the dictionary
   * @param key The key which will be used to access the item
   * @param value The item to add to the dictionary
   * @returns `true` if item was added to the dictionary, otherwise throws an `Error` if key already exists
   */
  add(key: K, value: V): boolean {
    const response = super.add(key, value);
    this.update();
    return response;
  }

  remove(key: K): boolean {
    const response = super.remove(key);
    this.update();
    return response;
  }

  update() {
    this.subject.next(this.Items);
  }
}

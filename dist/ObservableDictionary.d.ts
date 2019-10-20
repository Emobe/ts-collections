import { Dictionary } from ".";
export default class ObservableDictionary<K, V> extends Dictionary<K, V> {
    private subject;
    items$: import("rxjs").Observable<Map<K, V>>;
    /**
     * Adds item to the dictionary
     * @param key The key which will be used to access the item
     * @param value The item to add to the dictionary
     * @returns `true` if item was added to the dictionary, otherwise throws an `Error` if key already exists
     */
    add(key: K, value: V): boolean;
    remove(key: K): boolean;
    update(): void;
}

/// <reference types="node" />
import { EventEmitter } from "events";
export default class Dictionary<K, V> extends EventEmitter {
    private items;
    /**
     * @param items Items to add to the dictionary
     */
    constructor(items?: [K, V][]);
    /**
     * Adds item to the dictionary
     * @param key The key which will be used to access the item
     * @param value The item to add to the dictionary
     * @returns `true` if item was added to the dictionary, otherwise throws an `Error` if key already exists
     */
    add(key: K, value: V): boolean;
    /**
     * Clears the dictionary
     */
    clear(): void;
    /**
     * Access item from the dictionary
     * @param key The key of the item to return from the dictionary
     * @return Returns item if exists at the specified key, otherwise `undefined`
     */
    get(key: K): V;
    /**
     * Check if the dictionary contains key
     * @param key The key to check if element exists at
     * @return `true` if a value is associated with specified key in the dictionary, otherwise returns `false`
     */
    containsKey(key: K): boolean;
    /**
     * Check if the dictionary contains key
     * @param value The value to check if exists in the dictionary
     * @return `true` if the value exists in the dictionary, otherwise returns `false`
     */
    containsValue(value: V): boolean;
    /**
     * Remove element from the dictionary
     * @param key The key of the element to remove from the dictionary
     * @returns `true` if the element existed and was removed, otherwise `false` is returned
     */
    remove(key: K): boolean;
    /**
     * Returns the length of the data stored
     */
    count(): number;
    /**
     *
     */
    readonly Items: Map<K, V>;
    contains(item: Map<K, V>): boolean;
    [Symbol.iterator](): Map<K, V>;
}

import { KeyPair } from "./KeyPair";
export declare class Dictionary<V> {
    private items;
    /**
     * @param items Items to add to the dictionary
     */
    constructor(items?: KeyPair<V>);
    /**
     * Adds item to the dictionary
     * @param item The item to add to the dictionary
     * @returns `true` if item was added to the dictionary, otherwise returns `false`
     */
    add(item: KeyPair<V>): boolean;
    /**
     * Adds item to the dictionary
     * @param key The key which will be used to access the item
     * @param value The item to add to the dictionary
     * @returns `true` if item was added to the dictionary, otherwise throws an `Error` if key already exists
     */
    add(key: string, value: V): boolean;
    /**
     * Clears the dictionary
     */
    clear(): void;
    /**
     * Access item from the dictionary
     * @param key The key of the item to return from the dictionary
     * @return Returns item if exists at the specified key, otherwise `undefined`
     */
    get(key: string): V;
    /**
     * Check if the dictionary contains key
     * @param key The key to check if element exists at
     * @return `true` if a value is associated with specified key in the dictionary, otherwise returns `false`
     */
    containsKey(key: string): boolean;
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
    remove(key: string): boolean;
    /**
     * Remove element from the dictionary
     * @param index The index of the element to remove from the dictionary. Not reccomended as element order cannot be guaranteed.
     * @returns `true` if the element existed and was removed, otherwise `false` is returned
     */
    remove(index: number): boolean;
    /**
     *
     */
    readonly Items: KeyPair<V>;
    contains(item: KeyPair<V>): boolean;
    /**
     * Updates the dictionary by merging objects
     * @param value The value to merge with dictionary
     */
    private update;
}

export default class List<V> {
    private items;
    /**
     * @param items - Items to set initial data
     */
    constructor(items?: V[]);
    /**
     * Adds item to the list
     * @param item The item to add to the list
     */
    add(item: V): void;
    /**
     * Insert item at specified index. The elements that follow the insertion point move down to accommodate the new element
     * @param index
     * @param item
     */
    insert(index: number, item: V): void;
    /**
     * Clears the dictionary
     */
    clear(): void;
    /**
     * Check if the dictionary contains item
     * @param item The item to check if element exists at
     * @return `true` if element exists in the dictionary, otherwise returns `false`
     */
    contains(item: V): boolean;
    /**
     * Removes first occurance of the element
     * @param item
     * @returns `true` if the element existed and was removed, otherwise `false` is returned
     */
    remove(itemToRemove: V): boolean;
    /**
     * Remove item at the specified index
     * @param index Index to remove element at
     */
    removeAt(index: number): void;
    readonly Items: V[];
    [Symbol.iterator](): IterableIterator<V>;
}

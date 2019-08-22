export declare class List<T> {
    private items;
    /**
     * @param items - Items to set initial data
     */
    constructor(items?: T[]);
    /**
     * Adds item to the list
     * @param item The item to add to the list
     */
    add(item: T): void;
    /**
     * Clears the dictionary
     */
    clear(): void;
    /**
     * Check if the dictionary contains item
     * @param item The item to check if element exists at
     * @return `true` if element exists in the dictionary, otherwise returns `false`
     */
    contains(item: T): boolean;
    /**
     * Remove element from the dictionary
     * @param index The index of the element to remove from the list
     * @returns `true` if the element existed and was removed, otherwise `false` is returned
     */
    remove(index: number): void;
    readonly Items: T[];
}

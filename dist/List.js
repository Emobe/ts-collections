"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class List {
    /**
     * @param items - Items to set initial data
     */
    constructor(items) {
        this.items = [];
        if (items) {
            this.items.push(...items);
        }
    }
    /**
     * Adds item to the list
     * @param item The item to add to the list
     */
    add(item) {
        this.items.push(item);
    }
    /**
     * Clears the dictionary
     */
    clear() {
        this.items = [];
    }
    /**
     * Check if the dictionary contains item
     * @param item The item to check if element exists at
     * @return `true` if element exists in the dictionary, otherwise returns `false`
     */
    contains(item) {
        for (const i of this.items) {
            if (i === item) {
                return true;
            }
        }
        return false;
    }
    /**
     * Remove element from the dictionary
     * @param index The index of the element to remove from the list
     * @returns `true` if the element existed and was removed, otherwise `false` is returned
     */
    remove(index) {
        this.items.splice(index, 1);
    }
    get Items() {
        return this.items;
    }
}
exports.List = List;
//# sourceMappingURL=List.js.map
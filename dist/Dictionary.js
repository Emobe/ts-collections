"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = require("events");
class Dictionary extends events_1.EventEmitter {
    /**
     * @param items Items to add to the dictionary
     */
    constructor(items) {
        super();
        this.items = new Map();
        if (items) {
            this.items = new Map(items);
        }
    }
    /**
     * Adds item to the dictionary
     * @param key The key which will be used to access the item
     * @param value The item to add to the dictionary
     * @returns `true` if item was added to the dictionary, otherwise throws an `Error` if key already exists
     */
    add(key, value) {
        if (this.items.get(key)) {
            throw new Error(`Key: ${key} already exists on the dictionary`);
        }
        this.items.set(key, value);
        this.emit("add", value, key);
        return true;
    }
    /**
     * Clears the dictionary
     */
    clear() {
        this.items.clear();
    }
    /**
     * Access item from the dictionary
     * @param key The key of the item to return from the dictionary
     * @return Returns item if exists at the specified key, otherwise `undefined`
     */
    get(key) {
        return this.items.get(key);
    }
    /**
     * Check if the dictionary contains key
     * @param key The key to check if element exists at
     * @return `true` if a value is associated with specified key in the dictionary, otherwise returns `false`
     */
    containsKey(key) {
        return this.items.has(key);
    }
    /**
     * Check if the dictionary contains key
     * @param value The value to check if exists in the dictionary
     * @return `true` if the value exists in the dictionary, otherwise returns `false`
     */
    containsValue(value) {
        const iterator = this.items.values();
        let val = iterator.next().value;
        while (val !== value) {
            val = iterator.next().value;
        }
        return true;
    }
    /**
     * Remove element from the dictionary
     * @param key The key of the element to remove from the dictionary
     * @returns `true` if the element existed and was removed, otherwise `false` is returned
     */
    remove(key) {
        if (this.items.delete(key)) {
            this.emit("remove");
            return true;
        }
        return false;
    }
    /**
     * Returns the length of the data stored
     */
    count() {
        return this.items.size;
    }
    /**
     *
     */
    get Items() {
        return this.items;
    }
    contains(item) {
        throw new Error("Method not implemented.");
    }
    [Symbol.iterator]() {
        return this.items;
    }
}
exports.Dictionary = Dictionary;
//# sourceMappingURL=Dictionary.js.map
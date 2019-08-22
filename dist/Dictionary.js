"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Dictionary {
    /**
     * @param items Items to add to the dictionary
     */
    constructor(items) {
        this.items = {};
        if (items) {
            Object.assign(this.items, items);
        }
    }
    add(key, value) {
        if (this.items[key]) {
            throw new Error(`Key: ${key} already exists on the dictionary`);
        }
        this.update({ [key]: value });
        return true;
    }
    /**
     * Clears the dictionary
     */
    clear() {
        this.update({});
    }
    /**
     * Access item from the dictionary
     * @param key The key of the item to return from the dictionary
     * @return Returns item if exists at the specified key, otherwise `undefined`
     */
    get(key) {
        return this.items[key];
    }
    /**
     * Check if the dictionary contains key
     * @param key The key to check if element exists at
     * @return `true` if a value is associated with specified key in the dictionary, otherwise returns `false`
     */
    containsKey(key) {
        for (const k in this.items) {
            if (k === key) {
                return true;
            }
        }
        return false;
    }
    /**
     * Check if the dictionary contains key
     * @param value The value to check if exists in the dictionary
     * @return `true` if the value exists in the dictionary, otherwise returns `false`
     */
    containsValue(value) {
        for (const v of Object.keys(this.items)) {
            if (this.items[v] === value) {
                return true;
            }
        }
        return false;
    }
    remove(key) {
        if (this.items[key]) {
            delete this.items[key];
            return true;
        }
        return false;
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
    /**
     *
     * @param value updates dictionary
     */
    update(value) {
        Object.assign(this.items, value);
    }
}
exports.Dictionary = Dictionary;
//# sourceMappingURL=Dictionary.js.map
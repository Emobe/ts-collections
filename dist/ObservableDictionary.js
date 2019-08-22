"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
class ObservableDictionary {
    /**
     *
     * @param items Items to add to the dictionary upon initialisation
     */
    constructor(items) {
        let initial;
        if (items) {
            initial = Object.assign({}, items);
        }
        else {
            initial = {};
        }
        this.items = new rxjs_1.BehaviorSubject(initial);
        this.items$ = this.items.asObservable();
    }
    add(key, value) {
        if (this.items.value[key]) {
            return false;
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
        return this.items.value[key];
    }
    /**
     * Check if the dictionary contains key
     * @param key The key to check if element exists at
     * @return `true` if a value is associated with specified key in the dictionary, otherwise returns `false`
     */
    containsKey(key) {
        for (const k in this.items.value) {
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
        for (const v of Object.keys(this.items.value)) {
            if (this.items.value[v] === value) {
                return true;
            }
        }
        return false;
    }
    remove(key) {
        if (this.items.value[key]) {
            delete this.items.value[key];
            return true;
        }
        return false;
    }
    contains(item) {
        throw new Error("Method not implemented.");
    }
    get Items() {
        return this.items.value;
    }
    update(value) {
        this.items.next(Object.assign(this.items.value, value));
    }
}
exports.ObservableDictionary = ObservableDictionary;
//# sourceMappingURL=ObservableDictionary.js.map
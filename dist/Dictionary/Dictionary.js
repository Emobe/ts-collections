"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Dictionary {
    constructor(...items) {
        this.items = {};
        if (items) {
            Object.assign(this.items, ...items);
        }
    }
    add(key, value) {
        if (this.items[key]) {
            return false;
        }
        this.update({ [key]: value });
        return true;
    }
    clear() {
        this.update({});
    }
    containsKey(key) {
        for (const k in this.items) {
            if (k === key) {
                return true;
            }
        }
        return false;
    }
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
    get Items() {
        return this.items;
    }
    contains(item) {
        throw new Error("Method not implemented.");
    }
    update(value) {
        Object.assign(this.items, value);
    }
}
exports.Dictionary = Dictionary;
//# sourceMappingURL=Dictionary.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
class ObservableDictionary {
    constructor(...items) {
        let initial;
        if (items) {
            initial = Object.assign({}, ...items);
        }
        else {
            initial = null;
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
    clear() {
        this.update({});
    }
    get(key) {
        return this.Items[key];
    }
    containsKey(key) {
        for (const k in this.items.value) {
            if (k === key) {
                return true;
            }
        }
        return false;
    }
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
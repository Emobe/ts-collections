"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
class ObservableList {
    constructor(initialValue = []) {
        this.items = new rxjs_1.BehaviorSubject(initialValue);
        this.items$ = this.items.asObservable();
    }
    add(item) {
        const items = this.items.value;
        items.push(item);
        this.update(items);
    }
    clear() {
        this.update([]);
    }
    contains(item) {
        for (const i of this.items.value) {
            if (i === item) {
                return true;
            }
        }
        return false;
    }
    remove(index) {
        const items = this.items.value;
        items.splice(index, 1);
        this.update(items);
    }
    update(value) {
        this.items.next(value);
    }
    get asArray() {
        return this.items.value;
    }
}
exports.ObservableList = ObservableList;

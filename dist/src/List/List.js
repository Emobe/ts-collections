"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class List {
    constructor(items) {
        this.items = [];
        if (items) {
            this.items.push(...items);
        }
    }
    add(item) {
        this.items.push(item);
    }
    clear() {
        this.items = [];
    }
    contains(item) {
        for (const i of this.items) {
            if (i === item) {
                return true;
            }
        }
        return false;
    }
    remove(index) {
        this.items.splice(index, 1);
    }
    get Items() {
        return this.items;
    }
}
exports.List = List;

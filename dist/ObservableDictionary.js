"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
class ObservableDictionary extends _1.Dictionary {
    constructor() {
        super(...arguments);
        this.subject = new rxjs_1.BehaviorSubject(this.Items);
        this.items$ = this.subject.asObservable().pipe(operators_1.skip(1));
    }
    /**
     * Adds item to the dictionary
     * @param key The key which will be used to access the item
     * @param value The item to add to the dictionary
     * @returns `true` if item was added to the dictionary, otherwise throws an `Error` if key already exists
     */
    add(key, value) {
        const response = super.add(key, value);
        this.update();
        return response;
    }
    remove(key) {
        const response = super.remove(key);
        this.update();
        return response;
    }
    update() {
        this.subject.next(this.Items);
    }
}
exports.default = ObservableDictionary;
//# sourceMappingURL=ObservableDictionary.js.map
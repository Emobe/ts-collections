"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var ObservableDictionary = /** @class */ (function () {
    function ObservableDictionary() {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        var initial;
        if (items) {
            initial = Object.assign.apply(Object, [{}].concat(items));
        }
        else {
            initial = null;
        }
        this.items = new rxjs_1.BehaviorSubject(initial);
        this.items$ = this.items.asObservable();
    }
    ObservableDictionary.prototype.add = function (key, value) {
        var _a;
        if (this.items.value[key]) {
            return false;
        }
        this.update((_a = {}, _a[key] = value, _a));
        return true;
    };
    ObservableDictionary.prototype.clear = function () {
        this.update({});
    };
    ObservableDictionary.prototype.containsKey = function (key) {
        for (var k in this.items.value) {
            if (k === key) {
                return true;
            }
        }
        return false;
    };
    ObservableDictionary.prototype.containsValue = function (value) {
        for (var _i = 0, _a = Object.keys(this.items.value); _i < _a.length; _i++) {
            var v = _a[_i];
            if (this.items.value[v] === value) {
                return true;
            }
        }
        return false;
    };
    ObservableDictionary.prototype.remove = function (key) {
        if (this.items.value[key]) {
            delete this.items.value[key];
            return true;
        }
        return false;
    };
    ObservableDictionary.prototype.contains = function (item) {
        throw new Error("Method not implemented.");
    };
    Object.defineProperty(ObservableDictionary.prototype, "Items", {
        get: function () {
            return this.items.value;
        },
        enumerable: true,
        configurable: true
    });
    ObservableDictionary.prototype.update = function (value) {
        this.items.next(Object.assign(this.items.value, value));
    };
    return ObservableDictionary;
}());
exports.ObservableDictionary = ObservableDictionary;

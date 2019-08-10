"use strict";
exports.__esModule = true;
var Dictionary = /** @class */ (function () {
    function Dictionary() {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        this.items = {};
        if (items) {
            Object.assign.apply(Object, [this.items].concat(items));
        }
    }
    Dictionary.prototype.add = function (key, value) {
        var _a;
        if (this.items[key]) {
            return false;
        }
        this.update((_a = {}, _a[key] = value, _a));
        return true;
    };
    Dictionary.prototype.clear = function () {
        this.update({});
    };
    Dictionary.prototype.containsKey = function (key) {
        for (var k in this.items) {
            if (k === key) {
                return true;
            }
        }
        return false;
    };
    Dictionary.prototype.containsValue = function (value) {
        for (var _i = 0, _a = Object.keys(this.items); _i < _a.length; _i++) {
            var v = _a[_i];
            if (this.items[v] === value) {
                return true;
            }
        }
        return false;
    };
    Dictionary.prototype.remove = function (key) {
        if (this.items[key]) {
            delete this.items[key];
            return true;
        }
        return false;
    };
    Object.defineProperty(Dictionary.prototype, "Items", {
        get: function () {
            return this.items;
        },
        enumerable: true,
        configurable: true
    });
    Dictionary.prototype.contains = function (item) {
        throw new Error("Method not implemented.");
    };
    Dictionary.prototype.update = function (value) {
        Object.assign(this.items, value);
    };
    return Dictionary;
}());
exports.Dictionary = Dictionary;

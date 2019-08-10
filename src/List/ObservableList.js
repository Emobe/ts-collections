"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var ObservableList = /** @class */ (function () {
    function ObservableList(initialValue) {
        if (initialValue === void 0) { initialValue = []; }
        this.items = new rxjs_1.BehaviorSubject(initialValue);
        this.items$ = this.items.asObservable();
    }
    ObservableList.prototype.add = function (item) {
        var items = this.items.value;
        items.push(item);
        this.update(items);
    };
    ObservableList.prototype.clear = function () {
        this.update([]);
    };
    ObservableList.prototype.contains = function (item) {
        for (var _i = 0, _a = this.items.value; _i < _a.length; _i++) {
            var i = _a[_i];
            if (i === item) {
                return true;
            }
        }
        return false;
    };
    ObservableList.prototype.remove = function (index) {
        var items = this.items.value;
        items.splice(index, 1);
        this.update(items);
    };
    ObservableList.prototype.update = function (value) {
        this.items.next(value);
    };
    Object.defineProperty(ObservableList.prototype, "asArray", {
        get: function () {
            return this.items.value;
        },
        enumerable: true,
        configurable: true
    });
    return ObservableList;
}());
exports.ObservableList = ObservableList;

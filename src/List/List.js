"use strict";
exports.__esModule = true;
var List = /** @class */ (function () {
    function List(items) {
        var _a;
        this.items = [];
        if (items) {
            (_a = this.items).push.apply(_a, items);
        }
    }
    List.prototype.add = function (item) {
        this.items.push(item);
    };
    List.prototype.clear = function () {
        this.items = [];
    };
    List.prototype.contains = function (item) {
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var i = _a[_i];
            if (i === item) {
                return true;
            }
        }
        return false;
    };
    List.prototype.remove = function (index) {
        this.items.splice(index, 1);
    };
    Object.defineProperty(List.prototype, "Items", {
        get: function () {
            return this.items;
        },
        enumerable: true,
        configurable: true
    });
    return List;
}());
exports.List = List;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ArrayUtils = /** @class */ (function () {
    function ArrayUtils() {
    }
    ArrayUtils.from = function (count, generator) {
        var values = [];
        for (var i = 0; i < count; i++) {
            values.push(generator(i));
        }
        return values;
    };
    ArrayUtils.swap = function (array, indexA, indexB) {
        var _a;
        _a = [array[indexB], array[indexA]], array[indexA] = _a[0], array[indexB] = _a[1];
    };
    ArrayUtils.generateRandomArray = function (count, maxValue) {
        if (maxValue === void 0) { maxValue = 100; }
        return ArrayUtils.from(count, function () { return Math.floor(Math.random() * maxValue); });
    };
    ArrayUtils.flatten = function (array) {
        return array.reduce(function (result, values) {
            result.push.apply(result, values);
            return result;
        }, []);
    };
    return ArrayUtils;
}());
exports.ArrayUtils = ArrayUtils;
//# sourceMappingURL=ArrayUtils.js.map
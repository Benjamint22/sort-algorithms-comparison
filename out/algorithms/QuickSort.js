"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var SortAlgorithm_1 = require("./SortAlgorithm");
var QuickSort = /** @class */ (function (_super) {
    __extends(QuickSort, _super);
    function QuickSort() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    QuickSort.prototype.getSortedElements = function (elementsToSort) {
        if (elementsToSort.length === 0) {
            return [];
        }
        if (elementsToSort.length === 1) {
            return [elementsToSort[0]];
        }
        var smallerValues = [];
        var greaterValues = [];
        var pivot = elementsToSort.splice(Math.floor(elementsToSort.length / 2), 1)[0];
        elementsToSort.forEach(function (element) {
            if (element.isGreaterThan(pivot)) {
                greaterValues.push(element);
            }
            else {
                smallerValues.push(element);
            }
        });
        return __spreadArrays(this.getSortedElements(smallerValues), [pivot], this.getSortedElements(greaterValues));
    };
    return QuickSort;
}(SortAlgorithm_1.SortAlgorithm));
exports.QuickSort = QuickSort;
//# sourceMappingURL=QuickSort.js.map
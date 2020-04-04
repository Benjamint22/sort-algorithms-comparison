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
Object.defineProperty(exports, "__esModule", { value: true });
var SortAlgorithm_1 = require("./SortAlgorithm");
var ArrayUtils_1 = require("../utils/ArrayUtils");
var BubbleSort = /** @class */ (function (_super) {
    __extends(BubbleSort, _super);
    function BubbleSort() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BubbleSort.prototype.getSortedElements = function (elementsToSort) {
        for (var amountToCompare = elementsToSort.length; amountToCompare > 1; amountToCompare--) {
            for (var i = 1; i < amountToCompare; i++) {
                var firstElement = elementsToSort[i - 1];
                var secondElement = elementsToSort[i];
                if (firstElement.isGreaterThan(secondElement)) {
                    ArrayUtils_1.ArrayUtils.swap(elementsToSort, i - 1, i);
                }
            }
        }
        return elementsToSort;
    };
    return BubbleSort;
}(SortAlgorithm_1.SortAlgorithm));
exports.BubbleSort = BubbleSort;
//# sourceMappingURL=BubbleSort.js.map
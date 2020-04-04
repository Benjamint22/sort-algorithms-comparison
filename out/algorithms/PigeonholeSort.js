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
var PigeonholeSort = /** @class */ (function (_super) {
    __extends(PigeonholeSort, _super);
    function PigeonholeSort() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PigeonholeSort.prototype.getSortedElements = function (elementsToSort) {
        return ArrayUtils_1.ArrayUtils.flatten(elementsToSort.reduce(function (sortedElements, currentValue) {
            var value = currentValue.getValue();
            if (!sortedElements[value]) {
                sortedElements[value] = [];
            }
            sortedElements[value].push(currentValue);
            return sortedElements;
        }, []).filter(function (element) { return element; }));
    };
    return PigeonholeSort;
}(SortAlgorithm_1.SortAlgorithm));
exports.PigeonholeSort = PigeonholeSort;
//# sourceMappingURL=PigeonholeSort.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Comparable = /** @class */ (function () {
    function Comparable(value) {
        this.comparisonCount = 0;
        this.accessCount = 0;
        this.value = value;
    }
    Comparable.prototype.isGreaterThan = function (otherValue) {
        if (otherValue instanceof Comparable) {
            return this.isGreaterThan(otherValue.getValue());
        }
        this.comparisonCount++;
        return this.isGreaterThanOther(otherValue);
    };
    Comparable.prototype.getValue = function () {
        this.accessCount++;
        return this.value;
    };
    Comparable.prototype.popComparisonCount = function () {
        var comparisonCount = this.comparisonCount;
        this.comparisonCount = 0;
        return comparisonCount;
    };
    Comparable.prototype.popAccessCount = function () {
        var accessCount = this.accessCount;
        this.accessCount = 0;
        return accessCount;
    };
    return Comparable;
}());
exports.Comparable = Comparable;
var SortAlgorithm = /** @class */ (function () {
    function SortAlgorithm(elements) {
        this.elements = elements;
    }
    SortAlgorithm.verifyOrder = function (elements) {
        for (var i = 1; i < elements.length; i++) {
            if (elements[i - 1].isGreaterThan(elements[i])) {
                return false;
            }
        }
        return true;
    };
    SortAlgorithm.prototype.sort = function () {
        var startTime = Date.now();
        var elements = this.getSortedElements(this.elements.map(function (element) { return element.clone(); }));
        var executionTime = Date.now() - startTime;
        var comparisonCount = elements.reduce(function (sum, element) { return sum + element.popComparisonCount(); }, 0);
        var accessCount = elements.reduce(function (sum, element) { return sum + element.popAccessCount(); }, 0);
        var isSorted = SortAlgorithm.verifyOrder(elements);
        return {
            elements: elements.map(function (element) { return element.getValue(); }),
            executionTime: executionTime,
            comparisonCount: comparisonCount,
            accessCount: accessCount,
            isSorted: isSorted
        };
    };
    return SortAlgorithm;
}());
exports.SortAlgorithm = SortAlgorithm;
//# sourceMappingURL=SortAlgorithm.js.map
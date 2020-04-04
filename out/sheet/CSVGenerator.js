"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ObjectUtils_1 = require("../utils/ObjectUtils");
var CSVGenerator = /** @class */ (function () {
    function CSVGenerator() {
    }
    CSVGenerator.dataToString = function (data) {
        if (typeof data === 'function') {
            return 'function';
        }
        if (typeof data === 'object') {
            if (Array.isArray(data)) {
                if (data.length === 0) {
                    return 'any[0]';
                }
                return typeof data[0] + "[" + data.length + "]";
            }
            return 'object';
        }
        return data.toString();
    };
    CSVGenerator.generateCSV = function (data) {
        if (data.length === 0) {
            return '';
        }
        var headers = ObjectUtils_1.ObjectUtils.getKeys(data[0]);
        return headers.join(',') + (data
            .map(function (row) { return '\n' + headers
            .map(function (header) { return CSVGenerator.dataToString(row[header]); })
            .join(','); }));
    };
    return CSVGenerator;
}());
exports.CSVGenerator = CSVGenerator;
//# sourceMappingURL=CSVGenerator.js.map
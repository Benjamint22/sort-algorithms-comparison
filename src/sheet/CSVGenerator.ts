import { ArrayUtils } from "../utils/ArrayUtils";
import { ObjectUtils } from "../utils/ObjectUtils";

export class CSVGenerator {
    private static dataToString(data: any) {
        if (typeof data === 'function') {
            return 'function';
        }
        if (typeof data === 'object') {
            if (Array.isArray(data)) {
                if (data.length === 0) {
                    return 'any[0]';
                }
                return `${typeof data[0]}[${data.length}]`;
            }
            return 'object';
        }
        return data.toString();
    }

    public static generateCSV<T>(data: T[]) {
        if (data.length === 0) {
            return '';
        }
        const headers = ObjectUtils.getKeys(data[0]);
        return headers.join(',') + (
            data
                .map(
                    row => '\n' + headers
                        .map(header => CSVGenerator.dataToString(row[header]))
                        .join(',')
                )
        );
    }
}

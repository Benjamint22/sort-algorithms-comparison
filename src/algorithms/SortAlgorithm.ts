/**
 * Returns `true` if the current value is greater than `otherValue`.
 */
type Comparator<T> = (otherValue: T) => boolean;

export abstract class Comparable<T> {
    private value: T;
    private comparisonCount = 0;
    private accessCount = 0;

    constructor(value: T) {
        this.value = value;
    }

    public abstract clone(): Comparable<T>;

    public isGreaterThan(otherValue: Comparable<T>): boolean;
    public isGreaterThan(otherValue: T): boolean;
    public isGreaterThan(otherValue: Comparable<T> | T): boolean {
        if (otherValue instanceof Comparable) {
            return this.isGreaterThan(otherValue.getValue());
        }
        this.comparisonCount++;
        return this.isGreaterThanOther(otherValue);
    }

    public getValue() {
        this.accessCount++;
        return this.value;
    }

    public popComparisonCount() {
        const comparisonCount = this.comparisonCount;
        this.comparisonCount = 0;
        return comparisonCount;
    }

    public popAccessCount() {
        const accessCount = this.accessCount;
        this.accessCount = 0;
        return accessCount;
    }

    protected abstract isGreaterThanOther(otherValue: T): boolean;
}

interface SortResult<T> {
    elements: T[];
    executionTime: number;
    comparisonCount: number;
    accessCount: number;
    isSorted: boolean;
}

export abstract class SortAlgorithm<T> {
    private elements: Comparable<T>[];

    private static verifyOrder<T>(elements: Comparable<T>[]) {
        for (let i = 1; i < elements.length; i++) {
            if (elements[i - 1].isGreaterThan(elements[i])) {
                return false;
            }
        }
        return true;
    }

    constructor(elements: Comparable<T>[]) {
        this.elements = elements;
    }

    protected abstract getSortedElements(elementsToSort: Comparable<T>[]): Comparable<T>[];

    public sort(): SortResult<T> {
        const startTime = Date.now();
        const elements = this.getSortedElements(this.elements.map(element => element.clone()));
        const executionTime = Date.now() - startTime;
        const comparisonCount = elements.reduce((sum, element) => sum + element.popComparisonCount(), 0);
        const accessCount = elements.reduce((sum, element) => sum + element.popAccessCount(), 0);
        const isSorted = SortAlgorithm.verifyOrder(elements);
        return {
            elements: elements.map(element => element.getValue()),
            executionTime,
            comparisonCount,
            accessCount,
            isSorted
        }
    } 
}

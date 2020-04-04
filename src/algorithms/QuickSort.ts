import { SortAlgorithm, Comparable } from "./SortAlgorithm";

export class QuickSort<T> extends SortAlgorithm<T> {
    protected getSortedElements(elementsToSort: Comparable<T>[]): Comparable<T>[] {
        if (elementsToSort.length === 0) {
            return [];
        }
        if (elementsToSort.length === 1) {
            return [elementsToSort[0]];
        }
        const smallerValues: Comparable<T>[] = [];
        const greaterValues: Comparable<T>[] = [];
        const [ pivot ] = elementsToSort.splice(Math.floor(elementsToSort.length / 2), 1);
        elementsToSort.forEach(element => {
            if (element.isGreaterThan(pivot)) {
                greaterValues.push(element);
            } else {
                smallerValues.push(element);
            }
        });
        return [ ...this.getSortedElements(smallerValues), pivot, ...this.getSortedElements(greaterValues) ];
    }
}

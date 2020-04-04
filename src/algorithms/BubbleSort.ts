import { SortAlgorithm, Comparable } from "./SortAlgorithm";
import { ArrayUtils } from "../utils/ArrayUtils";

export class BubbleSort<T> extends SortAlgorithm<T> {
    protected getSortedElements(elementsToSort: Comparable<T>[]) {
        for (let amountToCompare = elementsToSort.length; amountToCompare > 1; amountToCompare--) {
            for (let i = 1; i < amountToCompare; i++) {
                const firstElement = elementsToSort[i - 1];
                const secondElement = elementsToSort[i];
                if (firstElement.isGreaterThan(secondElement)) {
                    ArrayUtils.swap(elementsToSort, i - 1, i);
                }
            }
        }
        return elementsToSort;
    }
}

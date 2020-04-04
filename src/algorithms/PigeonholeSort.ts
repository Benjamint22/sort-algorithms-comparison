import { SortAlgorithm, Comparable } from "./SortAlgorithm";
import { ArrayUtils } from "../utils/ArrayUtils";

export class PigeonholeSort extends SortAlgorithm<number> {
    protected getSortedElements(elementsToSort: Comparable<number>[]) {
        return ArrayUtils.flatten(
            elementsToSort.reduce<Comparable<number>[][]>(
                (sortedElements, currentValue) => {
                    const value = currentValue.getValue();
                    if (!sortedElements[value]) {
                        sortedElements[value] = [];
                    }
                    sortedElements[value].push(currentValue);
                    return sortedElements;
                },
                []
            ).filter(element => element)
        );
    }
}

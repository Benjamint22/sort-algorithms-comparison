import { ArrayUtils } from "./utils/ArrayUtils";
import { Comparable, SortAlgorithm } from "./algorithms/SortAlgorithm";
import { BubbleSort } from "./algorithms/BubbleSort";
import { QuickSort } from "./algorithms/QuickSort";
import { PigeonholeSort } from "./algorithms/PigeonholeSort";
import { ObjectUtils } from "./utils/ObjectUtils";
import { CSVGenerator } from "./sheet/CSVGenerator";
import { FileUtils } from "./utils/FileUtils";

class NumberComparable extends Comparable<number> {
    public clone() {
        return new NumberComparable(this.getValue());
    }

    protected isGreaterThanOther(otherValue: number): boolean {
        return this.getValue() > otherValue;
    }

}

async function main() {
    const values = ArrayUtils.generateRandomArray(50000, 100000).map(number => new NumberComparable(number));
    
    const sorts: { [name: string]: SortAlgorithm<number> } = {
        BubbleSort: new BubbleSort(values),
        QuickSort: new QuickSort(values),
        PigeonholeSort: new PigeonholeSort(values)
    };
    
    const algorithmNames = ObjectUtils.getKeys(sorts);
    
    const results = algorithmNames.map(
        (algorithmName) => {
            console.info(`Running ${algorithmName}.`);
            const results = sorts[algorithmName].sort();
            console.info(`Done running ${algorithmName} (${results.executionTime / 1000}s).`)
            return { algorithmName, ...results };
        }
    );
    
    await FileUtils.writeFileAsync('artifacts/result.csv', CSVGenerator.generateCSV(results));
}

main();

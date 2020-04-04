export class ArrayUtils {
    public static from<T>(count: number, generator: (index: number) => T) {
        const values: T[] = [];
        for (let i = 0; i < count; i++) {
            values.push(generator(i));
        }
        return values;
    }

    public static swap<T>(array: T[], indexA: number, indexB: number) {
        [ array[indexA], array[indexB] ] = [ array[indexB], array[indexA] ];
    }
    
    public static generateRandomArray(count: number, maxValue = 100) {
        return ArrayUtils.from(count, () => Math.floor(Math.random() * maxValue));
    }

    public static flatten<T>(array: T[][]) {
        return array.reduce((result, values) => {
            result.push(...values);
            return result;
        }, []);
    }
}

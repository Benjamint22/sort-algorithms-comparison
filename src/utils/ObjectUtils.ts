export class ObjectUtils {
    public static getKeys<T>(object: T): (keyof T)[] {
        return Object.keys(object) as unknown as (keyof T)[];
    }
}

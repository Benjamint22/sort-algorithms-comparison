import { writeFile, mkdir } from "fs";

export class FileUtils {
    public static getDirectoryFromFilepath(filepath: string) {
        return (/(([^\\\/]*)?([\\\/][^\\\/]*)*)([\\\/][^\\\/]*)/.exec(filepath) || [, ''])[1] || '';
    }

    public static async createDirectory(dirpath: string, recursive = true) {
        return new Promise<void>((resolve, reject) => {
            mkdir(dirpath, { recursive }, error => error ? reject(error) : resolve());
        });
    }

    public static async writeFileAsync(filepath: string, data: string) {
        await FileUtils.createDirectory(FileUtils.getDirectoryFromFilepath(filepath));
        return new Promise<void>((resolve, reject) => {
            writeFile(filepath, data, error => error ? reject(error) : resolve());
        });
    }
}

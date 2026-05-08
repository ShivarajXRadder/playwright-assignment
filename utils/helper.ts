export class Helper {

    static generateRandomText(length: number): string {
        return Math.random()
            .toString(36)
            .substring(2, 2 + length);
    }
}
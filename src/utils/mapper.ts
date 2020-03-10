export default abstract class Mapper<D, R> {

    protected constructor() {
    }

    one(doc: D): R {
        return this.map(doc);
    }

    all(docs: D[]): R[] {
        const result: R[] = [];
        for (const doc of docs) {
            result.push(this.map(doc))
        }
        return result;
    }

    protected abstract map(doc: D): R;
}

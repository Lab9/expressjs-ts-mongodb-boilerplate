/**
 * Utility class to map one object to another
 */
export default abstract class Mapper<D, R> {

    protected constructor() {
    }

    /**
     * Map one object to another
     * @param doc the object to map
     * @return the mapped object
     */
    one(doc: D): R {
        return this.map(doc);
    }

    /**
     * Map multiple objects
     * @param docs the objects to map
     * @return a list with all mapped objects
     */
    all(docs: D[]): R[] {
        const result: R[] = [];
        for (const doc of docs) {
            result.push(this.map(doc))
        }
        return result;
    }

    /**
     * Function that defines
     * the logic behind the map
     * @param doc
     */
    protected abstract map(doc: D): R;
}

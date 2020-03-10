import AbstractService from "./AbstractService";
import {Model} from "./BaseModel";

/**
 * The abstract factory base class.
 *
 *
 * @author Daniel Seifert
 */
export default abstract class AbstractFactory<B, T extends Model> {

    /**
     * The repository
     */
    protected readonly service: AbstractService<T>;

    /**
     * Construct a new instance
     * @param service the service
     */
    protected constructor(service: AbstractService<T>) {
        this.service = service;
    }

    /**
     * Construct a new model instance
     * surrounded by try catch to catch errors
     *
     * @param data the data
     */
    public async newInstance(data: B): Promise<T | never> {
        try {
            return this.build(data);
        } catch (e) {
            throw e
        }
    }

    /**
     * Build a new model instance
     *
     * @param data the data
     */
    protected async abstract build(data: B): Promise<T>;
}

import {DocumentType, ModelType} from "@typegoose/typegoose/lib/types";
import {Model} from "./BaseModel";
import {createDefaultMetaData} from "../utils";

/**
 * The abstract service base class.
 *
 * @author Daniel Seifert
 */
export default abstract class AbstractService<T extends Model> {
    protected readonly model: ModelType<T>;

    /**
     * Create a new service instance for a repository
     * @param model the model type
     */
    protected constructor(model: ModelType<T>) {
        this.model = model;
    }

    /**
     * asynchronously find all objects in the database
     */
    public async find(query: object = {}): Promise<DocumentType<T>[]> {
        return this.model.find(query).exec();
    }

    /**
     * Find a single model instance based on a query
     * @param query the query
     */
    public async findOne(query: object = {}): Promise<DocumentType<T> | null> {
        return this.model.findOne(query).exec();
    }

    /**
     * Find a single one base on it's id
     * @param id the id
     */
    public async findById(id: string): Promise<DocumentType<T> | null> {
        return this.model.findById(id).exec();
    }

    /**
     * create a new one
     * @param doc the document to create
     */
    public async create(doc: T): Promise<DocumentType<T>> {
        if (!doc.meta)
            doc.meta = createDefaultMetaData();
        return this.model.create(doc);
    }

    /**
     * Update an existing one
     * @param doc the document to update with the updated values
     */
    public async update(doc: DocumentType<T>): Promise<DocumentType<T> | null> {
        if (doc.meta)
            doc.meta.modifiedAt = Date.now();
        return this.model.findByIdAndUpdate(doc.id, doc).exec();
    }

    /**
     * Delete an existing document
     * @param id the document id
     */
    public async delete(id: string): Promise<DocumentType<T> | null> {
        return this.model.findByIdAndDelete(id).exec();
    }

    /**
     * Delete multiple entries
     * @param query
     */
    public async deleteMany(query: any): Promise<number> {
        const result = await this.model.deleteMany(query).exec();
        if (result && result.deletedCount) {
            return result.deletedCount;
        } else {
            return 0;
        }
    }
}

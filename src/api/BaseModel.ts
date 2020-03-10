import {prop} from "@typegoose/typegoose";
import {createDefaultMetaData} from "../utils";
import {MetaData} from "../models/MetaData";

/**
 * The base model class
 */
export class Model {
    @prop({required: true, default: createDefaultMetaData()})
    public meta!: MetaData
}

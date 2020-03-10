import {Model} from "../BaseModel";
import {Person} from "../../models/Person";
import {getModelForClass, modelOptions, prop} from "@typegoose/typegoose";
import {ModelType} from "@typegoose/typegoose/lib/types";
import {peopleDBConnection} from "../../database/ConnectionPool";

@modelOptions({existingConnection: peopleDBConnection})
export class PersonModel extends Model implements Person {
    @prop({required: true, index: true})
    public readonly firstName!: string;

    @prop({required: true, index: true})
    public readonly lastName!: string;
}

const PersonModelType: ModelType<PersonModel> = getModelForClass(PersonModel);

export default PersonModelType;

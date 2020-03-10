import {MetaData} from "../../models/MetaData";

export class PersonResponse {
    public readonly firstName!: string;
    public readonly lastName!: string;
    public readonly metaData!: MetaData;
}

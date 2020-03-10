import {Service} from "typedi";
import {Mapper} from "../../utils";
import {PersonModel} from "./PersonModel";
import {PersonResponse} from "./PersonResponse";

@Service()
export default class PersonResponseMapper extends Mapper<PersonModel, PersonResponse> {

    constructor() {
        super();
    }

    protected map(doc: PersonModel): PersonResponse {
        return {
            firstName: doc.firstName,
            lastName: doc.lastName,
            metaData: doc.meta
        };
    }
}

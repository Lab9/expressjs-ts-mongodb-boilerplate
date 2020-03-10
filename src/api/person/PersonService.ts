import {Service} from "typedi";
import AbstractService from "../AbstractService";
import PersonModelType, {PersonModel} from "./PersonModel";

@Service()
export default class PersonService extends AbstractService<PersonModel> {
    constructor() {
        super(PersonModelType);
    }
}

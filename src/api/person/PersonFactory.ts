import {Container, Service} from "typedi";
import AbstractFactory from "../AbstractFactory";
import {PersonPostBody} from "./PersonRequest";
import {PersonModel} from "./PersonModel";
import {createDefaultMetaData} from "../../utils";
import PersonService from "./PersonService";

@Service()
export default class PersonFactory extends AbstractFactory<PersonPostBody, PersonModel> {

    constructor() {
        super(Container.get(PersonService));
    }

    protected async build(data: PersonPostBody): Promise<PersonModel> {
        return this.service.create({
            firstName: data.firstName,
            lastName: data.lastName,
            meta: createDefaultMetaData()
        });
    }
}

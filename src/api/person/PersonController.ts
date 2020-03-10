import {Body, Get, JsonController, NotFoundError, Param, Post} from "routing-controllers";
import PersonService from "./PersonService";
import {Container} from "typedi";
import {PersonResponse} from "./PersonResponse";
import PersonMapper from "./PersonMapper";
import {PersonModel} from "./PersonModel";
import {DocumentType} from "@typegoose/typegoose";
import {PersonPostBody} from "./PersonRequest";
import PersonFactory from "./PersonFactory";

@JsonController('/people')
export default class PersonController {
    private readonly service: PersonService;

    constructor() {
        this.service = Container.get(PersonService);
    }

    /**
     * Return all people from the database
     */
    @Get('/')
    async getAll(): Promise<Array<PersonResponse>> {
        const result = await this.service.find({});
        return Container.get(PersonMapper).all(result);
    }

    /**
     * Return one person by id
     */
    @Get('/:id')
    async getOne(@Param('id') id: string): Promise<PersonResponse> {
        const ticket: DocumentType<PersonModel> | null = await this.service.findById(id);
        if (!ticket)
            throw new NotFoundError("Ticket not found.");
        return Container.get(PersonMapper).one(ticket);
    }

    /**
     * Create a new person
     * @param body the post body
     */
    @Post('/')
    async postPerson(@Body() body: PersonPostBody): Promise<PersonResponse> {
        const newPerson = await Container.get(PersonFactory).newInstance(body); // automatically creates it in the database
        return Container.get(PersonMapper).one(newPerson);
    }
}

import {json, NextFunction, Request, Response} from 'express'
import {ExpressMiddlewareInterface, Middleware} from "routing-controllers";

/**
 * A JSON Body parser.
 *
 * This middleware handles incoming json data and parses them directly into
 * a usable json format.
 *
 * @author Daniel Seifert
 */
@Middleware({type: 'before'})
export class BodyParser implements ExpressMiddlewareInterface {
    private static readonly PARSER = json();

    /**
     * @inheritDoc
     */
    use(request: Request, response: Response, next: NextFunction): any {
        BodyParser.PARSER(request, response, next);
    }
}

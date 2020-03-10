import cors from 'cors'
import {NextFunction, Request, RequestHandler, Response} from 'express'
import {ExpressMiddlewareInterface, Middleware} from "routing-controllers";

/**
 * The CorsHandler handles cross site origins.
 *
 * That way we can call the api from other IPs than it's hosting server has.
 *
 * @author Daniel Seifert
 */
@Middleware({type: "before"})
export class CorsHandler implements ExpressMiddlewareInterface {

    private static readonly CORS: RequestHandler = cors();

    /**
     * @inheritDoc
     */
    use(request: Request, response: Response, next: NextFunction): any {
        CorsHandler.CORS(request, response, next);
    }
}

import morgan from "morgan";
import {NextFunction, Request, RequestHandler, Response} from 'express'
import {ExpressMiddlewareInterface, Middleware} from "routing-controllers";

/**
 * The Route Logger logs every incoming request.
 *
 * To find out more about morgan, have a look at
 * https://www.npmjs.com/package/morgan
 *
 * @author Daniel Seifert
 */
@Middleware({type: "before"})
export class RouteLogger implements ExpressMiddlewareInterface {

    private static readonly FORMAT: string = "common";
    private static readonly MORGAN: RequestHandler = morgan(RouteLogger.FORMAT);

    /**
     * @inheritDoc
     */
    use(request: Request, response: Response, next: NextFunction): any {
        RouteLogger.MORGAN(request, response, next);
    }
}

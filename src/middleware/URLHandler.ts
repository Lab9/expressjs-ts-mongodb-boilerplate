import {NextFunction, Request, Response, urlencoded} from 'express'
import {ExpressMiddlewareInterface, Middleware} from "routing-controllers";

/**
 * The URLHandler handles encoded URLs.
 *
 * for example things like .../some file.txt -> .../some%20file.txt
 *
 * @author Daniel Seifert
 */
@Middleware({type: 'before'})
export class URLHandler implements ExpressMiddlewareInterface {
    private static readonly URLENCODED = urlencoded({extended: false});

    /**
     * @inheritDoc
     */
    use(request: Request, response: Response, next: NextFunction): any {
        URLHandler.URLENCODED(request, response, next);
    }
}

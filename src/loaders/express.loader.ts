import {MicroframeworkLoader, MicroframeworkSettings} from "microframework";
import express, {Application} from "express";
import {useContainer, useExpressServer} from "routing-controllers";
import {Container} from "typedi";
import {config} from "../config";
import {RouteLogger} from "../middleware/RouteLogger";
import {BodyParser} from "../middleware/BodyParser";
import {URLHandler} from "../middleware/URLHandler";
import {CorsHandler} from "../middleware/CorsHandler";
import PersonController from "../api/person/PersonController";

export const APP_KEY = "EXPRESS_APP";

/**
 * The express app loader.
 *
 * Firstly we create a new express application.
 *
 * Then, we let the routing-controllers know, which Container (used for dependency injection) we are using
 * and that we are using an express server.
 * We must register our middleware as well as our controllers within the options!
 *
 * Lastly, we save the app in the settings so that we can access it in the serverLoader.
 *
 * @param settings
 */
const expressLoader: MicroframeworkLoader = (settings?: MicroframeworkSettings): Promise<any> | any => {

    const app: Application = express();

    useContainer(Container);

    useExpressServer(app, {
        development: config.environment === "DEV",
        middlewares: [
            RouteLogger,
            BodyParser,
            URLHandler,
            CorsHandler
        ],
        controllers: [
            PersonController
        ]
    });

    settings!.setData(APP_KEY, app);
};

export {expressLoader}

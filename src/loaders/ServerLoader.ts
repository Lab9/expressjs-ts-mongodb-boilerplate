import {MicroframeworkLoader, MicroframeworkSettings} from "microframework";
import {Application} from "express";
import {APP_KEY} from "./ExpressLoader";
import {normalizePort} from "../utils";
import {config} from "../config";
import * as http from "http";

/**
 * The server loader.
 *
 * In here we actually create the web server.
 * and tell it to listen on which port.
 *
 * @param settings
 */
const ServerLoader: MicroframeworkLoader = (settings?: MicroframeworkSettings): Promise<any> | any => {
    const app: Application = (settings!.getData(APP_KEY) as Application);

    const port: number = normalizePort(config.port);

    app.set('port', port);

    const server: http.Server = http.createServer(app);

    server.listen(port);
};

export {ServerLoader}

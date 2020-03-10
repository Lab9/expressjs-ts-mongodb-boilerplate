import "reflect-metadata";
import {bootstrapMicroframework} from "microframework";
import {expressLoader} from "./loaders/express.loader";
import {serverLoader} from "./loaders/server.loader";
import {config} from "./config";

bootstrapMicroframework([
    expressLoader,
    serverLoader
])
    .then(_ => console.log(`Application is up and running on port ${config.port}.`))
    .catch(error => console.error("Application crashed: " + error));

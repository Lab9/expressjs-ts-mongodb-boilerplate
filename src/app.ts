import "reflect-metadata";
import {bootstrapMicroframework} from "microframework";
import {ExpressLoader} from "./loaders/ExpressLoader";
import {ServerLoader} from "./loaders/ServerLoader";
import {config} from "./config";

bootstrapMicroframework([
    ExpressLoader,
    ServerLoader
])
    .then(_ => console.log(`Application is up and running on port ${config.port}.`))
    .catch(error => console.error("Application crashed: " + error));

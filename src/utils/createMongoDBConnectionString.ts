import {config} from "../config";

/**
 * Concatenate the configuration into a valid mongodb connection string
 *
 * @param configuration the mongo configuration
 * @return a string with the valid configuration
 */
export default function (configuration: typeof config.mongoDB): string {
    const {username, password, host, port, database, replica} = configuration;
    let builder = "mongodb://";

    if (username && password)
        builder += username + ":" + password + "@";

    builder += `${host}:${port}/${database}`;

    if (replica)
        builder += `?replicaSet=${replica}`;

    return builder;
}

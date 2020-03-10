import {Connection, createConnection} from 'mongoose'
import {createMongoDBConnectionString} from "../utils";
import {config} from '../config'

const peopleDBConnection: Connection = establishConnection(config.mongoDB);

export {peopleDBConnection};

/**
 * Create a new connection to the mongo
 * database
 *
 * @param configuration the mongo configuration
 */
function establishConnection(configuration: typeof config.mongoDB): Connection {
    const url = createMongoDBConnectionString(configuration);
    return createConnection(url, configuration.connectionOptions);
}

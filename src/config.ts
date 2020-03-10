/**
 * The config that is being used.
 *
 * You might want to add some sort of functionality that provides
 * different configurations in different environments.
 *
 * For example database sources should never be the same in DEV, INT or PROD!
 */
export const config = {
    environment: "DEV",
    port: 8080,
    mongoDB: {
        username: "",
        password: "",
        host: "127.0.0.1",
        port: 27017,
        database: "development-database",
        replica: "",

        // See https://mongoosejs.com/docs/deprecations.html for more details
        connectionOptions: {
            useNewUrlParser: true,      // enables new url parser
            useUnifiedTopology: true,   // use new monitoring tools
            useCreateIndex: true,       // to ensure to use createIndex instead of ensureIndex
            useFindAndModify: false     // to ensure that it uses the newer FindAndModify and not FindOneAndUpdate function
        }
    }
};

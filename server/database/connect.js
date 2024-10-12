import { MongoClient, ServerApiVersion } from 'mongodb';
 
export const createConnection = (uri) => {
    return new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true
        }
    })
}
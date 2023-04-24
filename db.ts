import {Db, MongoClient} from "mongodb";

const URL = 'mongodb://admin:admin@localhost:27017/moviebox';

let dbConnection: Db;
const connectToDb = (cb:any) => {
    MongoClient.connect(URL)
        .then((client) => {
            console.log('Connected to MongDb');
            dbConnection = client.db();
            return cb();
        })
        .catch((err)=>{
            return cb(err)
        })
}

const getDb = () => dbConnection;


export {connectToDb, getDb}
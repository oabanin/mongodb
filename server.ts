import express, {Response} from "express";
// import {connectToDb, getDb} from "./db";
// import {Db, ObjectId} from "mongodb";
import mongoose from 'mongoose'
import {Movie} from "./models/movies";
import {router} from "./routes/movie-routes";

const PORT = 3000;
const URL = 'mongodb://admin:admin@localhost:27017/moviebox';
const app = express();
app.use(express.json()); //MIddleware for reading data vars from body
app.use(router); //Middlaware for router

mongoose
    .connect(URL)
    .then(() => console.log('Connected to MongDb'))
    .catch((err) => console.log(`DB connection error: ${err}`))

app.listen(PORT, () => console.log("listening started"));

// let db: Db;

// connectToDb((err: any) => {
//     if (!err) {
//         app.listen(PORT, () => console.log("listening started"))
//         db = getDb();
//     } else {
//         console.log(`Db Connection error: ${err}`);
//
//     }
// })

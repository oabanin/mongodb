import express, {Response} from "express";
// import {connectToDb, getDb} from "./db";
// import {Db, ObjectId} from "mongodb";
import mongoose from 'mongoose'
import {Movie} from "./models/movies";

const PORT = 3000;
const URL = 'mongodb://admin:admin@localhost:27017/moviebox';
const app = express();
app.use(express.json()); //MIddleware for reading data vars from body

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

const handleError = (res: Response<any, Record<string, any>>, error: string) => {
    res.status(500).json({error});
}

app.get('/movies', (req, res) => {

    // const movies: any = [];
    // db.collection('movies')
    //     .find()
    //     .sort({title: 1})
    //     .forEach((movie) => movies.push(movie))     //hasNext, next, forEach
    //     .then(() => {
    //         res.status(200)
    //             .json(movies)
    //     })
    //     .catch(() => handleError(res, "Something goes wrong"))

    Movie.find().sort({title: 1}).then((movies) => {
        res.status(200)
            .json(movies)
    })

})


app.get('/movie/:id', (req, res) => {
    // if (!ObjectId.isValid(req.params.id)) {
    //     res.status(500)
    //         .json({error: "Id is wrong"})
    // }

    // db.collection('movies')
    //     .findOne({_id: new ObjectId(req.params.id)})
    //     .then((doc) => {
    //         res.status(200)
    //             .json(doc)
    //     })
    //     .catch(() => handleError(res, "Something goes wrong"))
    Movie.findById(req.params.id).then((doc) => {
        res.status(200)
            .json(doc)
    })

})

app.delete('/movie/:id', (req, res) => {
    // if (!ObjectId.isValid(req.params.id)) {
    //     handleError(res, "Id is wrong")
    // }

    // db.collection('movies')
    //     .deleteOne({_id: new ObjectId(req.params.id)})
    //     .then((result) => {
    //         res.status(200)
    //             .json(result)
    //     })
    //     .catch(() => handleError(res, "Something goes wrong"))

    Movie.findByIdAndDelete(req.params.id).then((result) => {
        res.status(200)
            .json(result)
    })

})

app.post('/movies', (req, res) => {

    // db.collection('movies')
    //     .insertOne(req.body)
    //     .then((result) => {
    //         res.status(201)
    //             .json(result)
    //     })
    //     .catch(() => handleError(res, "Something goes wrong"))

    const movie = new Movie(req.body);

    movie.save().then((result) => {
        res.status(201)
            .json(result)
    })

})


app.patch('/movie/:id', (req, res) => {
    // if (!ObjectId.isValid(req.params.id)) {
    //     res.status(500)
    //         .json({error: "Id is wrong"})
    // }

    //
    // db.collection('movies')
    //     .updateOne({_id: new ObjectId(req.params.id)}, {$set: req.body})
    //     .then((doc) => {
    //         res.status(200)
    //             .json(doc)
    //     })
    //     .catch(() => handleError(res, "Something goes wrong"))

    Movie.findByIdAndUpdate(req.params.id, req.body)
        .then((doc) => {
            res.status(200)
                .json(doc)
        })
        .catch(() => handleError(res, "Something goes wrong"))

})
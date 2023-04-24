import express, {Response} from "express";
import {connectToDb, getDb} from "./db";
import {Db, ObjectId} from "mongodb";

const PORT = 3000;
const app = express();

let db: Db;

connectToDb((err: any) => {
    if (!err) {
        app.listen(PORT, () => console.log("listening started"))
        db = getDb();
    } else {
        console.log(`Db Connection error: ${err}`);

    }
})

const handleError = (res: Response<any, Record<string, any>>, error: string) => {
    res.status(500).json({error});
}

app.get('/movies', (req, res) => {
    const movies: any = [];
    db.collection('movies')
        .find()
        .sort({title: 1})
        .forEach((movie) => movies.push(movie))     //hasNext, next, forEach
        .then(() => {
            res.status(200)
                .json(movies)
        })
        .catch(() => handleError(res, "Something goes wrong"))

})


app.get('/movie/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        res.status(500)
            .json({error: "Id is wrong"})
    }

    db.collection('movies')
        .findOne({_id: new ObjectId(req.params.id)})
        .then((doc) => {
            res.status(200)
                .json(doc)
        })
        .catch(() => handleError(res, "Something goes wrong"))

})

app.delete('/movie/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        handleError(res, "Id is wrong")
    }

    db.collection('movies')
        .deleteOne({_id: new ObjectId(req.params.id)})
        .then((result) => {
            res.status(200)
                .json(result)
        })
        .catch(() => handleError(res, "Something goes wrong"))

})
import { Router} from "express";
import {getMovies, updateMovie, getMovie, addMovie, deleteMovie} from "../controllers/movie-controller";

const router = Router();
router.get('/movies', getMovies);
router.get('/movies/:id', getMovie);
router.delete('/movies/:id', deleteMovie);
router.post('/movies', addMovie);
router.patch('/movies/:id', updateMovie);

export {router}

// router.get('/movies', (req, res) => {
//
//     ///MONGODB
//
//     // const movies: any = [];
//     // db.collection('movies')
//     //     .find()
//     //     .sort({title: 1})
//     //     .forEach((movie) => movies.push(movie))     //hasNext, next, forEach
//     //     .then(() => {
//     //         res.status(200)
//     //             .json(movies)
//     //     })
//     //     .catch(() => handleError(res, "Something goes wrong"))
//
//     Movie.find().sort({title: 1}).then((movies) => {
//         res.status(200)
//             .json(movies)
//     })
//
// })
//
//
// router.get('/movie/:id', (req, res) => {
//     // if (!ObjectId.isValid(req.params.id)) {
//     //     res.status(500)
//     //         .json({error: "Id is wrong"})
//     // }
//
//     // db.collection('movies')
//     //     .findOne({_id: new ObjectId(req.params.id)})
//     //     .then((doc) => {
//     //         res.status(200)
//     //             .json(doc)
//     //     })
//     //     .catch(() => handleError(res, "Something goes wrong"))
//     Movie.findById(req.params.id).then((doc) => {
//         res.status(200)
//             .json(doc)
//     })
//
// })
//
// router.delete('/movie/:id', (req, res) => {
//     // if (!ObjectId.isValid(req.params.id)) {
//     //     handleError(res, "Id is wrong")
//     // }
//
//     // db.collection('movies')
//     //     .deleteOne({_id: new ObjectId(req.params.id)})
//     //     .then((result) => {
//     //         res.status(200)
//     //             .json(result)
//     //     })
//     //     .catch(() => handleError(res, "Something goes wrong"))
//
//     Movie.findByIdAndDelete(req.params.id).then((result) => {
//         res.status(200)
//             .json(result)
//     })
//
// })
//
// router.post('/movies', (req, res) => {
//
//     // db.collection('movies')
//     //     .insertOne(req.body)
//     //     .then((result) => {
//     //         res.status(201)
//     //             .json(result)
//     //     })
//     //     .catch(() => handleError(res, "Something goes wrong"))
//
//     const movie = new Movie(req.body);
//
//     movie.save().then((result) => {
//         res.status(201)
//             .json(result)
//     })
//
// })
//
//
// router.patch('/movie/:id', (req, res) => {
//     // if (!ObjectId.isValid(req.params.id)) {
//     //     res.status(500)
//     //         .json({error: "Id is wrong"})
//     // }
//
//     //
//     // db.collection('movies')
//     //     .updateOne({_id: new ObjectId(req.params.id)}, {$set: req.body})
//     //     .then((doc) => {
//     //         res.status(200)
//     //             .json(doc)
//     //     })
//     //     .catch(() => handleError(res, "Something goes wrong"))
//
//     Movie.findByIdAndUpdate(req.params.id, req.body)
//         .then((doc) => {
//             res.status(200)
//                 .json(doc)
//         })
//         .catch(() => handleError(res, "Something goes wrong"))
//
// })


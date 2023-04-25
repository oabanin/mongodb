import {Movie} from "../models/movies";
import {Request, Response} from "express";

const handleError = (res: Response<any, Record<string, any>>, error: string) => {
    res.status(500).json({error});
}

const getMovies = (req: Request<{}, any, any, any, Record<string, any>>, res: Response<any, Record<string, any>>) => {
    Movie.find().sort({title: 1}).then((movies) => {
        res.status(200)
            .json(movies)
    }).catch((err) => handleError(res, err));

}
const getMovie = (req: any, res: Response<any, Record<string, any>>) => {
    Movie
        .findById(req.params.id)
        .then((movie) => {
            res
                .status(200)
                .json(movie);
        })
        .catch((err) => handleError(res, err));
};

const deleteMovie = (req: any, res: Response<any, Record<string, any>>) => {
    Movie
        .findByIdAndDelete(req.params.id)
        .then((result) => {
            res
                .status(200)
                .json(result);
        })
        .catch((err) => handleError(res, err));
};

const addMovie = (req: Request<{}, any, any, any, Record<string, any>>, res: Response<any, Record<string, any>>) => {
    const movie = new Movie(req.body);
    movie
        .save()
        .then((result) => {
            res
                .status(201)
                .json(result);
        })
        .catch((err) => handleError(res, err));
};

const updateMovie = (req: any, res: Response<any, Record<string, any>>) => {
    Movie
        .findByIdAndUpdate(req.params.id, req.body)
        .then((result) => {
            res
                .status(200)
                .json(result);
        })
        .catch((err) => handleError(res, err));
};


export {getMovies, getMovie, addMovie, deleteMovie, updateMovie}
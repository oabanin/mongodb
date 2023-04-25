import {Schema, model} from 'mongoose'


const movieSchema = new Schema({
    // title: String,
    title: {type: String, required: true},
    director: {type: String, required: true},
    year: {type: Number, required: true},
    genres: [String],
    rating: Number,
    duration: {
        hours: Number,
        minutes: Number
    },
    reviews: [{name: String, text: String}]
})

const Movie = model('Movie', movieSchema); //

export {Movie}
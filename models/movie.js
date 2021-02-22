import mongoose from 'mongoose'

const Schema = mongoose.Schema

const movieSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    rank: {
        type: Number,
        required: true
    },
    image: {
        type: Object,
        required: true
    },
    id: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    }
})

export const Movie = mongoose.model('Movie', movieSchema)
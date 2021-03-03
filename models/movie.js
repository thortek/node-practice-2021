import mongoose from 'mongoose'

const Schema = mongoose.Schema

const movieSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    rank: {
        type: Number,
        required: false
    },
    image: {
        type: Object,
        required: false
    },
    id: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: false
    }
})

export const Movie = mongoose.model('Movie', movieSchema)
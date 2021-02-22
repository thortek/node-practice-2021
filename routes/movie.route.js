import { Router } from 'express'

export const movieRouter = Router()

import { addMovie, getMovies, getMovieById, updateMovie, deleteMovie } from '../controllers/movie.controller.js'

movieRouter.post('/', addMovie)

movieRouter.get('/', getMovies)

movieRouter.get('/id', getMovieById)

movieRouter.put('/update', updateMovie)

movieRouter.delete('/delete', deleteMovie)
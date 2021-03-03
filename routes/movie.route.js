import { Router } from 'express'

export const movieRouter = Router()

import { addMovie, movies, deleteMovie} from '../controllers/movie.controller.js'

movieRouter.post('/', addMovie)

movieRouter.get('/', movies)

movieRouter.delete('/delete', deleteMovie)

/* movieRouter.get('/id', getMovieById)

movieRouter.put('/update', updateMovie)

 */
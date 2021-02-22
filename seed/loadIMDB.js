import axios from "axios"
import { Movie } from '../models/movie.js'
import * as dotenv from 'dotenv'
dotenv.config()

const options = {
  method: 'GET',
  url: 'https://imdb8.p.rapidapi.com/auto-complete',
  params: {q: 'Thor'},
  headers: {
    'x-rapidapi-key': `${process.env.RAPIDAPI_KEY}`,
    'x-rapidapi-host': 'imdb8.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
    stuffMongo(response.data)
    
}).catch(function (error) {
	console.error(error);
})

const stuffMongo = (movieList) => {
    console.log(movieList.d[0])
    addMovie(movieList.d[0])
}


export const addMovie = ((oneMovie) => {
    const movie = new Movie({
        title: oneMovie.l,
        rank: oneMovie.rank,
        image: oneMovie.i,
        id: oneMovie.id,
        year: oneMovie.y
    })
    console.log(movie)
    movie.save() // save method is provided by Mongoose
    //res.json(movie)
})
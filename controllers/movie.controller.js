import { Movie } from '../models/movie.js'

export const addMovie = ((req, res) => {
    const movie = new Movie({
        title: req.body.title,
        rank: req.body.rank,
        image: req.body.image,
        id: req.body.id,
        year: req.body.year
    })
    console.log(movie)
    movie.save() // save method is provided by Mongoose
    res.json(movie)
})

/* export const getAllProducts = ((req, res) => {
    Product.find()
        .then(products => {
        res.json(products)
        })
    .catch(err => console.log(err))
}) */

export const movies = async (req, res) => {
    const movies = await Movie.find()
    if (!movies) {
        return res.status(400).json({Message: `No movies found`})
    }
    res.json(movies)
}

export const getProductById = async (req, res) => {
    const prodId = req.body.productId
    console.log(prodId)
    try {
        const product = await Product.findById(prodId)
        if (!product) {
            return res.status(404).json({ Message: 'Product not Found' })
        }
        res.json(product)
    } catch(err) {
        res.status(400).json({Message: `Invalid ID: ${err}`})
    }
}

export const putEditProduct = async (req, res) => {
    const prodId = req.body.productId
    const updatedObj = {
        title: req.body.title,
        price: req.body.price, // typeof ? (if string then parsed by Mongoose, else number by body-parser)
        description: req.body.description,
        imageUrl: req.body.imageUrl,
    }
    try {
        const product = await Product.findByIdAndUpdate(prodId, updatedObj, { new: true })
        res.json(product)
    } catch (err) {
        res.status(400).json({Message: `Could not update: ${err}`})
    }
}

export const deleteMovie = async (req, res) => {
    console.log(req.body)
    const movieId = req.body.movieId
    try {
        const deletedMovie= await Movie.findByIdAndRemove(movieId)
        if (!deletedMovie) {
            return res.status(400).json({Message: `Movie to delete not found.`})
        }
        console.log(`Deleted the movie: ${deletedMovie}`)
        res.sendStatus(200) // a simple success
    } catch (err) {
        res.status(400).json({Message: `Invalid ID: ${err}`})
    }

}
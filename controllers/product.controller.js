import { Product } from '../models/product.js'

export const postAddProduct = ((req, res) => {
    const product = new Product({
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
    })
    console.log(product)
    product.save() // save method is provided by Mongoose
    res.json(product)
})

export const getAllProducts = ((req, res) => {
    Product.find()
        .then(products => {
        res.json(products)
        })
    .catch(err => console.log(err))
})

export const getProducts = async (req, res) => {
    const products = await Product.find()
    res.json(products)
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

export const postEditProduct = async (req, res) => {
    const prodId = req.body.productId
    const updatedTitle = req.body.title
    const updatedPrice = req.body.price
    const updatedDescription = req.body.description
    const updatedImageUrl = req.body.imageUrl

    const product = await Product.findById(prodId)
    product.title = updatedTitle
    product.price = updatedPrice
    product.imageUrl = updatedImageUrl
    product.description = updatedDescription

    return product.save()
}
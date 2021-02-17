import { Router } from 'express'

export const productRouter = Router()

import { postAddProduct, getAllProducts, getProducts, getProductById, postEditProduct } from '../controllers/product.controller.js'

productRouter.post('/', postAddProduct)

productRouter.get('/', getAllProducts)

productRouter.get('/async', getProducts)

productRouter.get('/id', getProductById)

productRouter.post('/update', postEditProduct)
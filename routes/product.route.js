import { Router } from 'express'

export const productRouter = Router()

import { product } from '../controllers/product.controller.js'

productRouter.get('/', product)
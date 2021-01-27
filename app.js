import express from 'express'
import { apiRouter } from './routes/api.route.js'
import { productRouter } from './routes/product.route.js'

const app = express()
const port = process.env.PORT || 5000

app.use(express.static('public'))

app.use('/api', apiRouter)

app.use('/product', productRouter)

app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
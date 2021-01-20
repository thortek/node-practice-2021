import express from 'express'
import { testRouter } from './routes/test.route.js'

const app = express()
const port = process.env.PORT || 3000

app.use('/', testRouter)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
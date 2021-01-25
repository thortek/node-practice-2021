import { Router } from 'express'

export const apiRouter = Router()

apiRouter.get('/', (req, res) => {
    res.json({
        status: 'awesome',
        name: 'Thor',
        strongestAvenger: true,
        likes: [
            'Hammers',
            'Getting hammered'
        ]
    })
})
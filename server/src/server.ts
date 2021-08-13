import express from 'express'
import cors from 'cors'

import postRouter from './routes/post'

import './database'

const app = express()

app.use(express.json())
app.use(cors())

app.use('/api/post', postRouter)

app.listen(5000, () => console.log('Running on 5000'))

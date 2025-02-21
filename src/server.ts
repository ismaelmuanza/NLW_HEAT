import express from 'express'
import { routes } from './app/routes/routes'

const app = express()

app.use(express.json())

app.use(routes)

const port = 4000

app.listen(port, () => console.log('Server Running!'))
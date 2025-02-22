import express from 'express'
import { routes } from './app/routes/routes'
import cors from 'cors'
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(cors())
app.use(routes)

const port = 4000



app.listen(port, () => console.log('Server Running!'))
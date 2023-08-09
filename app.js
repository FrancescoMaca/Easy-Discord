import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import { dirname, join } from 'path'
import cors from 'cors'
import router from './api/routes/routes.js'
import './bots/easy-manager/easy-manager.js'

dotenv.config()

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use(express.static(join(dirname('.'), 'server')));
app.use(router);

app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`);
})
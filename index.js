import express from 'express'
import 'dotenv/config'
import './database/connectdb.js'

import authRoute from "./routes/auth.route.js";
const app = express()
app.use('/api/v1', authRoute)

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=> console.log('Connected https://localhost:5000'))

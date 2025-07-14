import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { connectDB } from './lib/db.js'
import authRoutes from './routes/auth.route.js'


dotenv.config()

const port = process.env.PORT;

const app = express();

app.use(express.json());

app.use(cookieParser());

app.use(cors({origin:['http://localhost:5173'], credentials:true}))

app.use('/api/auth',authRoutes)



app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
    connectDB()
})
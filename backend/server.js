import express from 'express'
import dotenv from "dotenv";
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import {v2 as cloudinary} from "cloudinary"

import authRoutes from './routes/authRoute.js'
import userRoutes from './routes/userRoute.js'
import postRoutes from './routes/postRoute.js'
import notificationRoutes from './routes/notificationRoute.js'




import connectMongoDb from './db/db.js';



dotenv.config()
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,

})

const app = express();
const PORT = process.env.PORT || 5000

app.use(express.json({limit:"5mb"}))
app.use(bodyParser.json())


app.use(cookieParser())

app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)
app.use('/api/posts', postRoutes)
app.use('/api/notifications', notificationRoutes)






app.listen(PORT, ()=>{
    console.log(`Server is running on PORT : ${PORT}`);
    connectMongoDb()
})

import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/userRoutes';

const app = express();

app.use(express.json());

app.use(userRouter)

const PORT = process.env.PORT || 3000;

const MONGO_DB_URL = process.env.MONGO_DB_URL || 'mongodb://127.0.0.1:27017/mydatabase';

mongoose.connect(MONGO_DB_URL).then((data) => {
    console.log('MongoDB Connection Succeeded')
}).catch((err) => {
    console.log(`Error in DB connection`, err.message)
})




const server = app.listen(PORT, () => console.log(
  `Server is running on PORT: ${PORT}`,
));

export default server;

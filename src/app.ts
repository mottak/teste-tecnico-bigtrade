import express from 'express';
import 'express-async-errors'
import userRouter from './routes/userRoutes';
import { errorMiddleware } from './middlewares/errorMiddleware';

const app = express();

app.use(express.json());

app.use(userRouter)
app.use(errorMiddleware)

export default app;
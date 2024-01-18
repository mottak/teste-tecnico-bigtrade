import app from './app';
import mongoose from 'mongoose';
import 'dotenv/config';


const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000
const MONGO_DB_URL: string = process.env.MONGO_DB_URL ||
'mongodb://root:example@localhost:27017';

function startServer() {
  const port: number = PORT
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}

mongoose.connect(MONGO_DB_URL)
    
mongoose.connection.on('connected', () => {
  console.log('MongoDB connection established') 
  startServer()
})

mongoose.connection.on('error', (err) => {
  console.error(`MongoDB connection error: ${err}`);
  process.exit(1);
});

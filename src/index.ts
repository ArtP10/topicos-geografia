import express from 'express';
import http from 'http';
import { url } from 'inspector';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import weatherRoutes from './routes/weatherRoutes';


dotenv.config()


const app = express();
app.use(express.json());
app.use("/api", weatherRoutes);

export default app;

const server = http.createServer(app);


server.listen(8080, () => {
    
})

const urlDB = process.env.MONGO_URL;
console.log("trying to access: ", urlDB)

mongoose.Promise = Promise;
mongoose.connect(urlDB || '');
mongoose.connection.on('error', (error: Error) => console.log(error));


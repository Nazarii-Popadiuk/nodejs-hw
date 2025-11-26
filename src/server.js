import express from 'express';
import cors from "cors";
import { notFoundHandler } from './middleware/notFoundHandler.js';
import {errorHandler} from './middleware/errorHandler.js';
import dotenv from 'dotenv';
import { connectMongoDB } from './db/connectMongoDB.js';
import notesRoutes from './routes/notesRoutes.js';
import {logger} from './middleware/logger.js';


dotenv.config();

const app = express();
const Port = process.env.PORT || 3000;

app.use(logger);
app.use(express.json());
app.use(cors());

app.use(notesRoutes);

app.use(notFoundHandler);

app.use(errorHandler);

await connectMongoDB();

app.listen(Port, () => {
    console.log(`Server is running on ${Port}`);
});
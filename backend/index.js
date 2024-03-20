import express from 'express';
import bodyPaser from 'body-parser'
import { connectToDB } from './controller/DB-Operations.js';
import dotenv from 'dotenv';
import EmployeeRouter from './router/EmployeeRouter.js'
import ProductivityRouter from './router/ProductivityRouter.js'
import cors from 'cors';

dotenv.config()
const app = express();
const PORT = 5000;

app.use(bodyPaser.json());
app.use(cors({ origin: ['http://localhost:5173','https://greendzine-interntask.onrender.com'] }))
app.use('/api/v1', EmployeeRouter);
app.use('/api/v1', ProductivityRouter);


app.listen(PORT, () => {
    console.log(`App is listening on port: http://localhost:${PORT}`)
    connectToDB()
})
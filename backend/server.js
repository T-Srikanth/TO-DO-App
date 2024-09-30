import express, { json } from 'express';
import cors from 'cors';
import { connect } from 'mongoose';
import todosRouter from './routes/todos.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(json());
app.use('/todos',todosRouter); 

// Connect to MongoDB
connect(process.env.ATLAS_URL);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
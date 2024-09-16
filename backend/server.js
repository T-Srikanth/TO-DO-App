const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const todosRouter = require('./routes/todos');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());
app.use('/todos',todosRouter); 

// Connect to MongoDB
mongoose.connect(process.env.ATLAS_URL);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
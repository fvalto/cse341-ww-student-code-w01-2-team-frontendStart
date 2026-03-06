require('dotenv').config();
const port = process.env.PORT || 8080;
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const connectDB = require('../backend/connection');
connectDB();

const professionalData = require('./professionalData.json');
app.get('/professional', (req, res) => {
    res.json(professionalData);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
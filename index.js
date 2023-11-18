const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
    dbName: process.env.DB_NAME,
});

const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

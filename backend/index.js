const express = require('express');
const category = require('./Routers/Category');
const user = require('./Routers/User');
const mongoose = require('mongoose');

const app = express();
mongoose.connect('mongodb://127.0.0.1:27017/recipeApp');

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});

app.get('/', (req, res) => {
    res.send('Recipe app');
});

app.use('/category', category);
app.use('/user', user);

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});


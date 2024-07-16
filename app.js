const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const api = require('./routes/api');
const app = express();
PORT = 4001;

app.use(bodyparser.json());
app.use(express.json());
app.use('/api',api);

// MONGODB CONNECTION
mongoose.connect('');

mongoose.connection.once('open',()=>{
    console.log("Connected to Database..");
});

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});

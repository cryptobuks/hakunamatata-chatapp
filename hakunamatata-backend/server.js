const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();

const dbConfig = require('./config/database');

app.use(cookieParser());
app.use(logger('dev'));

mongoose.Promise = global.Promise;
mongoose.connect(
    dbConfig.url, 
    { useNewUrlParser: true }
);

let port = 4000;

app.listen(port, () => 
    console.log('Running on port '+port)
)
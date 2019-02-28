const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(
    'mongodb://hakunamatata:vforvendetta1@ds155665.mlab.com:55665/hakunamatata', 
    { useNewUrlParser: true }
);

let port = 4000;

app.listen(port, () => 
    console.log('Running on port '+port)
)
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

// initialize path
dotenv.config({path:'./config.env'})

//PORT in config file
const PORT = process.env.PORT;

//connect mongoose to key and establish connection
require('./db/conn');
app.use(express.json());
app.use(require('./router/auth'));
//Middleware
function Middleware(res, req, next) {
    console.log('hello middleware');
    next();
}

app.listen(PORT, ()=>{
    console.log(`server is running on port 3000`)
})
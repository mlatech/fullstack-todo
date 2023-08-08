const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors')

const router = require('./src/router')
dotenv.config();

//how to access enviroment variables
console.log(process.env.MONGO_URI)

const app = express();

//middleware
app.use(express.json())
app.use(cors())
app.use(morgan("tiny"))


app.use(router)//allow you to put all route definitions in a different file



app.listen(8080)

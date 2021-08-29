const express = require('express');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
require ('dotenv').config();

const app = express()

app.use(cors());

const port = 5500;

app.get('/', (req, res) => {
    res.send("Hello from DB  it's working and working!!!")
})

app.listen(process.env.Port || port)
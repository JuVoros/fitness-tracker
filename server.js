const express = require("express");
const logger = require('morgan')
const mongoose = require('mongoose');
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const db = require("./models")
const controllers = require("./routes")
const app = express();

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout',
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true
});

app.use(controllers);
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.listen(PORT, ()=> {
    console.log(`App sprinting on port ${PORT}!`);
});
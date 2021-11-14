const mongoose = require("mongoose");
const express = require("express");
const logger = require("morgan");
const path = require("path");

const PORT = process.env.PORT || 8080;

// Add the other variables here

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongod://localhost/workoutTracker", {useNewUrlParser: true });


// Add app get later

app.listen(PORT, () => {
    console.log(`App sprinting on port ${PORT}!`);
});




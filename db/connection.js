require("dotenv").config()
const mongoose = require("mongoose")

//VARIABLES

const DATABASE_URL = process.env.DATABASE_URL
const config = {useUnifiedTopology: true, UseNewUrlParser: true}

//DATABASE

mongoose.connect(DATABASE_URL, config)

//our connection messages
mongoose.connection
.on("open", () => console.log("Connected to Mongo"))
.on("close", () => console.log("disconnected from mongo"))
.on("error", (err) => console.log(err))

module.exports = mongoose


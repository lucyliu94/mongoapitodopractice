require("dotenv").config()

const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const TodoRouter = require("./controllers/todo")

///////
// VARIABLES
//////
const PORT = process.env.PORT || 3000

///////////////////////
//CREATE APPLICATION OBJECT
//////////////////////
const app = express()

//MIDDLEWARE
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())

///////////
//Routes & Routers
//////////

app.get("/", (req,res) => res.send("HelloWorld!"))
app.use("/todos", TodoRouter)

////////
///Listener 
/////// 
app.listen(PORT, () => {console.log(`I'm listening on port ${PORT}!`)})
//IMPORT SECTION:
const express = require("express")
const app = express()
const PORT = 8800
const process = require("process")
const dotenv = require("dotenv")
const cors = require('cors')
dotenv.config()

//Middlewares
app.use(cors())
app.use(express.json({ urlextended: true, limit: "50mb" }))


//MONGODB SECTION:

const { mongodb_url } = require("./models/mongo")
// // const url=mongodb.mongodb_url(process.env.MONGODB_URL)
// console.log(url)
mongodb_url(process.env.MONGODB_URL)


//ROUTES SECTION
const staticroutes = require("./routes/StaticRoutes")
const postroutes = require("./routes/PostRoutes")
app.use("/", staticroutes)
app.use("/", postroutes)


//SERVER SECTION
app.listen(PORT, () => { console.log(`Server Running at Port:${PORT}`) })
const express = require("express")
const app = express()
const dotenv = require("dotenv")
const bodyParser = require("body-parser")
const mongo = require("./server/mongodb")
const mainRouter = require("./server/routes")
const path = require("path")

// Setup CORS. Can use Node's built-in cors() function too
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})

// Serve up our frontend
// Note: In order to connect Express to React, we need to run "npm run build" to compile/create finished html page
app.use(express.static(path.join(__dirname, '/build')))

// allow .env file use for Node.js
dotenv.config()

// default port for now
const port = process.env.PORT || 8080

// parse app.json / x-www-form-urlencoded
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

// Use routes/index.js as primary route entry
app.use(mainRouter)

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/build/index.html"))
})

// start instance of mongoDB to pass around app then start express
mongo.connect(process.env.MONGODB_URL)
    .then(() => app.listen(port))
    .then(() => console.log(`Running on port: ${port}`))
    .catch((err) => {
        console.error(err)
        process.exit(1)
    })

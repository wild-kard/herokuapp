const dotenv = require("dotenv").config()
const express = require('express')
const app = express()
const cors = require("cors")

const port = process.env.PORT || 9000

const path = require('path')

app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname,"client/build")))

//underscore is a place holder variable
app.use("/api/*", (_,res)=>{
    res.json({data:"This is the API data"})
})

app.use("*", (_,res)=>{
    res.sendFile(path.join(__dirname,"client/build","index.html"))
})

app.listen(port,()=>{
    console.log(`Server alive on port ${port}`)
})




// console.log("it's alive!")
// console.log(__dirname)
// console.log(__filename)
// console.log(process.env.USERNAME)
// console.log(process.env.PORT)
// console.log(process.env.DB_PASS)
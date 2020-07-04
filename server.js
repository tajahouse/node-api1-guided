const express = require('express');
const db = require('./database.js')

const server = express();

server.get("/", (req, res)=>{
    res.json({
        message: "You've got this, Taja"
    })
})

server.listen(4000, ()=>{
    console.log("server started on port 4000")
})
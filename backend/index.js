const express = require('express')
const https   = require('https')
const http    = require('http')
const fs      = require('fs')
const app     = express()

var options = {
  cert: fs.readFileSync('~/fullchain.pem'),
  key: fs.readFileSync('~/privkey.pem'),
}

app.get("/example",(req,res)=>{
    res.send("This is a godd test!")
})
http.createServer(app).listen(80)
https.createServer(options, app).listen(443)
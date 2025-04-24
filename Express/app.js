//Core Modules
const http = require('http');

// External Module
const express = require('express')

// Local Module
const userRequestHandler =  require('./user')

const app = express()

app.use((req, res, next) =>{
  console.log("Came in first middleware", req.url, req.method);
  next();
})

app.use((req, res, next) =>{
  console.log("Came in second middleware", req.url, req.method);
  res.send("<p>Welcome to Complete Coding NodeJS series</p>");
})

const server = http.createServer(app)

const PORT = 8000;
server.listen(PORT, ()=>{
  console.log(`listening to the server at port ${PORT}`);
  
})

// 6 hour 48 minute
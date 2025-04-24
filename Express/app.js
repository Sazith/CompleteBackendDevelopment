//Core Modules
const http = require('http');

// External Module
const express = require('express')

// Local Module
const userRequestHandler =  require('./user')

const app = express()

app.use('/',(req, res, next) => {
  console.log("Came in first middleware", req.url, req.method);
  next();
});



app.use('/submit-detail', (req, res, next) => {
  console.log("Came in /submit-detail middleware", req.url, req.method);
  res.send("<p>Welcome to Complete Coding NodeJS series app</p>");
});

app.use('/', (req, res, next) => {
  console.log("Came in another middleware", req.url, req.method);
  res.send("<p>Came in another middleware</p>");
});

const server = http.createServer(app)

const PORT = 8000;
// server.listen(PORT, ()=>{
//   console.log(`listening to the server at port ${PORT}`);
  
// })

app.listen(PORT, ()=>{
  console.log(`listening to the server at port ${PORT}`);
  
})

// 7 hour 7 minute
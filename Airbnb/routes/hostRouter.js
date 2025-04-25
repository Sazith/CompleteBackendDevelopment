// Core Module
const path = require('path')

// External Module
const express = require('express');
const hostRouter = express.Router();

// Local Module
const rootDir = require('../utils/pathUtil')

const registerHome = []
hostRouter.get("/add-home",(req, res, next) => {
  // res.send(`
  //   <h1>Register your home here</h1>
  //   <form action="/host/add-home" method="POST">
  //   <input type="text" name="houseName" placeholder="Enter your house name"/>
  //   <input type="submit" value="Submit"/>
  //   </form>
  //   `);
  // res.sendFile(path.join(__dirname,'../','views','addHome.html'))
  // res.sendFile(path.join(__dirname,'../','views','addHome.html'))
  res.sendFile(path.join(rootDir,'views','addHome.html'))
})

hostRouter.post("/add-home",(req, res, next) => {
  console.log(req.body);
  // res.send(`
  //   <h1>Home Registered Successfully</h1>
  //    <a href="/">Go to Home</a>
  //   `);
  // res.sendFile(path.join(__dirname,'../','views','homeAdded.html'))
   registerHome.push({houseName : req.body.houseName})
  res.sendFile(path.join(rootDir,'views','homeAdded.html'))
})


exports.hostRouter = hostRouter;
exports.registerHome = registerHome

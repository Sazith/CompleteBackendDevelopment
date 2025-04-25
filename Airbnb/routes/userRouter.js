// Core Module
const path = require('path')

// External Module
const express = require('express');
const userRouter = express.Router();

// Local Module
const rootDir = require('../utils/pathUtil')
const {registerHome} = require('./hostRouter')

userRouter.get("/",(req, res, next) => {
  // res.send(`
  //   <h1>Welcome to Airbnb</h1>
  //   <a href="/host/add-home">Add Home</a>
  //   `);
  // res.sendFile(path.join(__dirname,'../','views','home.html'))
  console.log(registerHome);
  
  // res.sendFile(path.join(rootDir,'views','home.html'))
  res.render('home',{registerHome})
})

module.exports = userRouter;

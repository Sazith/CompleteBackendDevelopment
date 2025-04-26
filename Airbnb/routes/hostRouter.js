// Core Module
const path = require('path')

// External Module
const express = require('express');
const hostRouter = express.Router();

// Local Module
const rootDir = require('../utils/pathUtil')
const homeController = require('../controllers/home')

const registerHome = []
hostRouter.get("/add-home",homeController.getAddHome)

hostRouter.post("/add-home",homeController.postAddHome)


exports.hostRouter = hostRouter;
exports.registerHome = registerHome

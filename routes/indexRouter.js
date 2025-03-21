const { Router } = require("express");
const express = require('express');
const app = express();
const indexRouter = Router();
const indexController = require('../controllers/indexController.js')
const gamesController = require('../controllers/gamesController.js')



indexRouter.get("/", indexController.get);
indexRouter.get("/games", gamesController.get);




module.exports= indexRouter;
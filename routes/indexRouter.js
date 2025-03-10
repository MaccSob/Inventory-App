const { Router } = require("express");
const express = require('express');
const app = express();
const indexRouter = Router();
const indexController = require('../controllers/indexController.js')
const genresController = require('../controllers/genresController.js')



indexRouter.get("/", indexController.get);
indexRouter.get("/genres", genresController.get);




module.exports= indexRouter;
const { Router } = require("express");
const express = require('express');
const app = express();
const indexRouter = Router();
const controller = require('../controllers/indexController.js')


indexRouter.get("/", controller.get);



module.exports= indexRouter;
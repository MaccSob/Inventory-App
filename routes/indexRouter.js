const express = require("express");
const indexRouter = express.Router();

indexRouter.route("/").get((req, res) => {
  res.render("index", { title: "Home" });
});

indexRouter.route("/games").get((req, res) => {
  res.render("games", { title: "Games" });
});
indexRouter.route("/categories").get((req, res) => {
  res.render("categories", { title: "Categories" });
});

module.exports = indexRouter;
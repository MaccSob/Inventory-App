require("dotenv").config();
const express = require('express');
const indexRouter = require("./routes/indexRouter");
const path = require('path');
const PORT = process.env.PORT;

const server = express();



server.set('view engine', 'ejs');
 


server.use("/", indexRouter);







server.listen(PORT, () => {
  console.log(`Server is currently running on  ${PORT}!`);
});
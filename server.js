require("dotenv").config();
const express = require('express');
const server = express();
const PORT = process.env.PORT;






server.use("/", indexRouter);







server.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
});
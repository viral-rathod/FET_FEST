// Other imports
const dbConfig = require("./config/database.config");

// Server connection imports
const express = require("express");
const cors = require("cors");
const body_parser = require("body-parser");
const mongoose = require("mongoose");

// Create application to start with express
const app = express();

// Give CORS support
app.use(cors());

// parse requests of content type - application/x-www-form-urlencoded
app.use(body_parser.urlencoded({ extended: true }));

// parse requests of content type - application/json
app.use(body_parser.json());

// Listen application on some port
app.listen(3000, err => {
  if (!err) console.log("Server started on port 3000");
  else
    console.log(
      "Server couldn't be connected due to ",
      JSON.stringify(err, undefined, 2)
    );
});

// connect to db
mongoose
  .connect(dbConfig.url, {
    useNewUrlParser: true
  })
  .then(() => {
    console.log("Successfully connected to DB!");
  })
  .catch(err => {
    console.log("Can not connect to db dut to ", err);
    process.exit();
  });

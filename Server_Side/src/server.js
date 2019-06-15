// Other imports
const dbConfig = require("./config/database.config");
const schoolRoutes = require("./routes/school.routes");
const authRoutes = require("./routes/auth.routes");
const studentRoutes = require("./routes/student.route");

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

// Routes
app.use("/api/school", schoolRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/student", studentRoutes);

// Listen application on some port
const port = 8085;
app.listen(port, err => {
  if (!err) console.log("Server started on port " + port);
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

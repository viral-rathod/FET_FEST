// defining required imports
const express = require("express");
const routes = express.Router();

// controller import
const school_ctrl = require("../controllers/school.controller");

routes.post("/create", school_ctrl.create);

module.exports = routes;

// defining required imports
const express = require("express");
const routes = express.Router();

// controller import
const school_ctrl = require("../controllers/school.controller");

routes.post("/findAll", school_ctrl.findAll);

module.exports = routes;

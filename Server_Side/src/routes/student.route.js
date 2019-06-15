// defining required imports
const express = require("express");
const routes = express.Router();

// controller import
const student_ctrl = require("../controllers/student.controller");

routes.post("/findAll", student_ctrl.findAll);
routes.post("/create", student_ctrl.create);

module.exports = routes;

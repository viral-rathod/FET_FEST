// defining required imports
const express = require("express");
const routes = express.Router();

// controller import
const student_ctrl = require("../controllers/student.controller");

routes.post("/findAll", student_ctrl.findAll);
routes.post("/create", student_ctrl.create);
routes.put("/update/:id", student_ctrl.update);
routes.delete("/delete/:id", student_ctrl.delete);
routes.post("/find/:id", student_ctrl.findById);
routes.post("/findByAmenities", student_ctrl.findByAmenities);

module.exports = routes;

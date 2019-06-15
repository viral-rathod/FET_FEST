// defining required imports
const express = require("express");
const routes = express.Router();

// controller import
const auth_ctrl = require("../controllers/auth.controller");

routes.post("/sign_up", auth_ctrl.register);
routes.post("/sign_in", auth_ctrl.login);

module.exports = routes;

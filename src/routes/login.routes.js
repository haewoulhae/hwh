var express = require("express");
const router = express.Router();
const loginController = require("../controller/login.controller")

router.get("/create", loginController.signUp);

module.exports = router;
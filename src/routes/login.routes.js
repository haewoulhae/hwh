var express = require("express");
const router = express.Router();
const loginController = require("../controller/login.controller");
// const { findId } = require("../dao/login.dao");
const path = require('path')

router.post("/", loginController.signUp);
router.get("/findId", loginController.findId);
router.get("/findPw", loginController.findPw);

module.exports = router;
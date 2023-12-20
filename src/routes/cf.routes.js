var express = require("express");
const router = express.Router();
const cfController = require("../controller/cf.controller")

router.get("/postBoard", cfController.postBoard);

module.exports = router;
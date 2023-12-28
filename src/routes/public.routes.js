var express = require("express");
const router = express.Router();
const publicController = require("../controller/public.controller")

router.get("/getBoard", publicController.getBoard);

module.exports = router;
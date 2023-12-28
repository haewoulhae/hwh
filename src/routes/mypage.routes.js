var express = require("express");
const router = express.Router();
const mypageController = require("../controller/mypage.controller")

router.get("/mine", mypageController.mine);


module.exports = router;
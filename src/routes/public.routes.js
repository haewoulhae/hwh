var express = require("express");
const router = express.Router();
const publicController = require("../controller/public.controller")

router.get("/getBoard", publicController.getBoard);
router.get("/hotlist", publicController.hotList);
router.get("/hotmember",publicController.hotMember);

module.exports = router;
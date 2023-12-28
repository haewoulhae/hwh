var express = require("express");
const router = express.Router();
const lanController = require("../controller/lan.controller");

router.post("/postLanBoard", lanController.postLanBoard); //등록
router.put("/editLanBoard", lanController.editLanBoard); //수정
router.delete("/delLanBoard", lanController.delLanBoard); //삭제
router.get("/getLanBoard", lanController.getLanBoard); //확인

module.exports = router;

// 라 컨 서 다

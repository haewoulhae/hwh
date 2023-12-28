var express = require("express");
const router = express.Router();
const cfController = require("../controller/cf.controller");

router.post("/postBoard", cfController.postBoard);          //등록
router.put("/postEdit", cfController.postEdit);             //수정
router.delete("/postDel", cfController.postDel);        //삭제
router.get("/getBoard", cfController.getBoard);             //열람

router.post("/postCmt", cfController.postCmt);              //댓글
router.put("/putCmt", cfController.putCmt);               //수정
router.delete("/deleteCmt", cfController.deleteCmt);          //삭제
router.get("/getCmt", cfController.getCmt);                 //댓글 열람

module.exports = router;

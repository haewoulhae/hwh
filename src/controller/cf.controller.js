const cfService = require("../service/cf.service");

async function postBoard(req, res, next) {
  const postBoard_req = req.body;
  const postBoard_data = await cfService.postBoard(postBoard_req);
  return res.status(postBoard_data.Status).json(postBoard_data);
}
async function postEdit(req, res, next) {
  const postEdit_req = req.body;
  console.log(postEdit_req);
  const postEdit_data = await cfService.postEdit(postEdit_req);
  return res.status(postEdit_data.Status).json(postEdit_data);
}
async function postDel(req, res, next) {
  const postDel_req = req.body;
  const postDel_data = await cfService.postDel(postDel_req);
  return res.status(postDel_data.Status).json(postDel_data);
}
async function getBoard(req, res, next) {
  const getBoard_req = req.query;
  const getBoard_data = await cfService.getBoard(getBoard_req);
  return res.status(getBoard_data.Status).json(getBoard_data);
}

async function postCmt(req, res, next) {
  const postCmt_req = req.body;
  const postCmt_data = await cfService.postCmt(postCmt_req);
  return res.status(postCmt_data.Status).json(postCmt_data);
}
async function putCmt(req, res, next) {
  const putCmt_req = req.body;
  const putCmt_data = await cfService.putCmt(putCmt_req);
  return res.status(putCmt_data.Status).json(putCmt_data);
}
async function deleteCmt(req, res, next) {
  const deleteCmt_req = req.body;
  const deleteCmt_data = await cfService.deleteCmt(deleteCmt_req);
  return res.status(deleteCmt_data.Status).json(deleteCmt_data);
}
async function getCmt(req, res, next) {
  // console.log("controller")
  const getCmt_req = req.query;
  const getCmt_data = await cfService.getCmt(getCmt_req);
  console.log(getCmt_data);
  return res.status(getCmt_data.Status).json(getCmt_data);
  // return getCmt_data
}
module.exports = {
  postBoard,
  postEdit,
  postDel,
  getBoard,
  postCmt,
  putCmt,
  deleteCmt,
  getCmt,
};

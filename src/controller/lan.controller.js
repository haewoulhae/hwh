const lanService = require("../service/lan.service");

async function postLanBoard(req, res, next) {
  const postLanBoard_req = req.query;
  const postLanBoard_data = await lanService.postLanBoard(postLanBoard_req);
  return res.status(postLanBoard_data.Status).json(postLanBoard_data);
}
async function editLanBoard(req, res, next) {
  const editLanBoard_req = req.query;
  const editLanBoard_data = await lanService.editLanBoard(editLanBoard_req);
  return res.status(editLanBoard_data.Status).json(editLanBoard_data);
}
async function delLanBoard(req, res, next) {
  const delLanBoard_req = req.query;
  const delLanBoard_data = await lanService.delLanBoard(delLanBoard_req);
  return res.status(delLanBoard_data.Status).json(delLanBoard_data);
}
async function getLanBoard(req, res, next) {
  const getLanBoard_req = { lan_id: 1 };
  const getLanBoard_data = await lanService.getLanBoard(getLanBoard_req);
  return res.status(getLanBoard_data.Status).json(getLanBoard_data);
}

module.exports = {
  postLanBoard,
  editLanBoard,
  delLanBoard,
  getLanBoard,
};

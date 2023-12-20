const cfService = require("../service/cf.service");

async function postBoard(req, res, next) {
    const postBoard_req = req.query;
    const postBoard_data = await cfService.postBoard(postBoard_req);
    return res.status(postBoard_data.status).json(postBoard_data);
}

module.exports = {
    postBoard
};
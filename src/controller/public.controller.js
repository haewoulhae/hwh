const publicService = require("../service/public.service");

async function getBoard(req, res, next) {
    const getBoard_req = req.query;
    console.log(getBoard_req)
    const getBoard_data = await publicService.getBoard(getBoard_req);
    return res.status(getBoard_data.Status).json(getBoard_data);
}

module.exports = {
    getBoard
};
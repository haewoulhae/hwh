const publicService = require("../service/public.service");

async function getBoard(req, res, next) {
    const getBoard_req = req.query;
    console.log(getBoard_req)
    const getBoard_data = await publicService.getBoard(getBoard_req);
    return res.status(getBoard_data.Status).json(getBoard_data);
}
async function hotList(req, res, next) {
    const hotList_data = await publicService.hotList();
    console.log(hotList_data);
    return res.status(hotList_data.Status).json(hotList_data);
}
async function hotMember(req, res, next) {
    const hotMember_data = await publicService.hotMember();
    console.log(hotMember_data);
    return res.status(hotMember_data.Status).json(hotMember_data);
}

module.exports = {
    getBoard,
    hotList,
    hotMember
};
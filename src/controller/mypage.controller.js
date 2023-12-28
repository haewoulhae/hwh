const mypageService = require("../service/mypage.service");

async function mine(req, res, next) {
    const mine_req = req.query;
    console.log("controller in", mine_req);
    const mine_data = await mypageService.mine(mine_req);
    console.log("controller mine", mine_data)
    return res.status(mine_data.Status).json(mine_data);
}

module.exports = {
    mine
};
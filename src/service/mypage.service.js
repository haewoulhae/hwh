const mypageDao = require("../dao/mypage.dao");

async function mine(req) {
    try {
        if(!req) {
            return {
                "Message" : "id 값이 없습니다.",
                "Status" : 406
            }
        }
        const mine_cf = await mypageDao.mine_cf(req);
        const mine_lan = await mypageDao.mine_lan(req);
        const mine_data = [];
        for (const element_cf of mine_cf) {
            element_cf.board = 'comflower';
            mine_data.push(element_cf);
        }
        for (const element_lan of mine_lan) {
            element_lan.board = 'language';
            mine_data.push(element_lan)
        }
        const data = mine_data.sort((a, b) => b.time - a.time);
        //console.log("service res", data);
        return {
            "Message" : "성공",
            "Status" : 200,
            "Data" : data
        }
    } catch(err) {
        return {
            "Message" : "실패",
            "Status" : 400,
            "Error_Message" : err
        }
    }
}

module.exports = {
    mine
}
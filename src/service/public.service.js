const publicDao = require("../dao/public.dao");

async function getBoard(req) {
    try {
        console.log("service in", req)
        if(!req) {
            return {
                "Message" : "요청 값이 없습니다.",
                "Status" : 406
            }
        }
        const comflower_data = await publicDao.getComflower(req);
        const language_data = await publicDao.getLanguage(req);
        const data =[]
        for (const element_cf of comflower_data) {
            data.push(element_cf);
        }
        for (const element_lan of language_data) {
            data.push(element_lan);
        }
        console.log("service out", data);
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
        
async function hotList() {
    try {
        const hotList_cf = await publicDao.hotList_cf();
        const hotList_lan = await publicDao.hotList_lan();
        var hotList_data = [];
        for (const element_cf of hotList_cf) {
            hotList_data.push(element_cf)
        }
        for (const element_lan of hotList_lan) {
            hotList_data.push(element_lan)
        }
        const data = hotList_data.sort((a, b) => Number(b.cnt) - Number(a.cnt) || a.title.localeCompare(b.title));
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

async function hotMember() {
    try {
        const data = await publicDao.hotMember();
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
    getBoard,
    hotList,
    hotMember
}
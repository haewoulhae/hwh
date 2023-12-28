const publicDao = require("../dao/public.dao");

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
    hotList,
    hotMember
}
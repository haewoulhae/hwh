const loginDao = require("../dao/login.dao");

async function signUp(req) {
    try {
        if(!req) {
            return {
                "Message" : "요청 값이 없습니다.",
                "Status" : 406
            }
        }
        const signUp_data = await loginDao.signUp(req);
        return {
            "Message" : "성공",
            "Status" : 200,
            "Data" : signUp_data
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
    signUp
}
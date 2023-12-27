const loginService = require("../service/login.service");

async function signUp(req, res, next) {
    console.log("컨트롤러 들어오나?")
    const signUp_req = req.body;
    console.log("controller", signUp_req);
    const signUp_data = await loginService.signUp(signUp_req);
    if(signUp_data.Data == "empty"){
        return res.redirect("create")
    }
    if(signUp_data.Status == 200){
        return res.redirect("/")
        // return res.status(signUp_data.Status).json(signUp_data);
    }
}
async function findId(req,res) {
    const findId_req = req.query;
    const findId_data = await loginService.findId(findId_req);
    if(findId_data.Status == 200){
        console.log("controller res", findId_data);
        return res.status(findId_data.Status).json(findId_data);
    }
}
async function findPw(req,res) {
    const findPw_req = req.query;
    const findPw_data = await loginService.findPw(findPw_req);
    if(findPw_data.Status == 200){
        console.log("controller res", findPw_data)
        // console.log("컨트롤러 성공")
        return res.status(findPw_data.Status).json(findPw_data);
    }
}

module.exports = {
    signUp,
    findId,
    findPw
};
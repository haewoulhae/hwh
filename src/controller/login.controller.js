const loginService = require("../service/login.service");

async function signUp(req, res, next) {
    const signUp_req = req.query;
    const signUp_data = await loginService.signUp(signUp_req);
    return res.status(signUp_data.status).json(signUp_data);
}


module.exports = {
    signUp
};
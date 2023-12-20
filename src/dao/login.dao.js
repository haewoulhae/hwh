const db = require("../config/db");

async function signUp(req) {
    return new Promise((resolve, reject) => {
        var queryData = `insert into user(user_name ,nickname ,email, webid, webpw, user_ans) 
        values('${req.user_name}','${req.nickname}','${req.email}','${req.webid}','${req.webpw}','${req.user_ans}' )`;
        console.log(queryData)
        db.query(queryData, (error, db_data) => {
            if(error) {
                console.log("DB error [Board]" + "\n \t" + queryData + "\n \t" + error);
                reject("DB ERR");
            }
            resolve(db_data);
        })
    })
}

module.exports = {
    signUp
}
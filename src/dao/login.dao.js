const db = require("../config/db");

async function signUp(req) {
    return new Promise((resolve, reject) => {
        console.log("user_name: "+req.nickname)
        var queryData = `insert into user(user_name , nikname , email, webid, webpw, user_ans) 
        values('${req.name}','${req.id}','${req.password}','${req.nickname}','${req.mail}','${req.question}' )`;
        console.log(queryData)
        db.query(queryData, (error, db_data) => {
            if(error) {
                console.log("DB error [user]" + "\n \t" + queryData + "\n \t" + error);
                reject("DB ERR");
            }
            resolve(db_data);
        })
    })
}

async function findId(req) {
    return new Promise((resolve, reject) => {
        var queryData = `select webid from user where email = '${req.email}' and user_name = '${req.user_name}'`;
        db.query(queryData, (error, db_data) => {
            if(error) {
                console.log("DB error [user]" + "\n \t" + queryData + "\n \t" + error);
                reject("DB ERR");
            }
            resolve(db_data);
        })
    })
}

async function findPw(req) {
    console.log("dao 들어옴", req)
    return new Promise((resolve, reject) => {
        var queryData = `select webpw from user where webid='${req.webid}' and user_ans ='${req.user_ans}'`;
        db.query(queryData, (error, db_data) => {
            if(error) {
                console.log("DB error [user]" + "\n \t" + queryData + "\n \t" + error);
                reject("DB ERR");
            }
            resolve(db_data);
        })
    })
}

module.exports = {
    signUp,
    findId,
    findPw
}
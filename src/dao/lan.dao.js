const db = require("../config/db");

async function postBoard(req) {
    return new Promise((resolve, reject) => {
        var queryData = `query`;
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
    postBoard
}
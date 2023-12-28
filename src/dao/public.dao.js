const db = require("../config/db");

async function getComflower(req) {
    return new Promise((resolve, reject) => {
        var queryData = `SELECT cf_id, cf_title as title FROM comflower WHERE cf_title LIKE '%apple%'`;
        db.query(queryData, (error, db_data) => {
            if(error) {
                console.log("DB error [comflower]" + "\n \t" + queryData + "\n \t" + error);
                reject("DB ERR");
            }
            resolve(db_data);
        })
    })
}

async function getLanguage(req) {
    return new Promise((resolve, reject) => {
        var queryData = `SELECT lan_id, lan_title as title FROM language WHERE lan_title LIKE '%apple%'`;
        db.query(queryData, (error, db_data) => {
            if(error) {
                console.log("DB error [language]" + "\n \t" + queryData + "\n \t" + error);
                reject("DB ERR");
            }
            resolve(db_data);
        })
    })
}

module.exports = {
    getComflower,
    getLanguage
}
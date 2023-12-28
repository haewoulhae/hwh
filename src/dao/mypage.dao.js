const db = require("../config/db");
const logger = require("../config/logger");

async function mine_cf(req) {
    return new Promise((resolve, reject) => {
        var queryData = `SELECT cf_id, cf_title as title, cf_post_time as time FROM comflower
        WHERE user_id=${req.user_id} ORDER BY cf_post_time DESC`;
        db.query(queryData, (error, db_data) => {
            if(error) {
                logger.error(
                    'DB error [comflower]' + 
                    '\n \t' + queryData +
                    '\n \t' + error
                )
                reject("DB ERR");
            }
            resolve(db_data);
        })
    })
}
async function mine_lan(req) {
    console.log("Dao in", req)
    return new Promise((resolve, reject) => {
        var queryData = `SELECT lan_id, lan_title as title, lan_post_time as time FROM language
        WHERE user_id=${req.user_id} ORDER BY lan_post_time DESC`;
        db.query(queryData, (error, db_data) => {
            if(error) {
                logger.error(
                    'DB error [language]' + 
                    '\n \t' + queryData +
                    '\n \t' + error
                )
                reject("DB ERR");
            }
            resolve(db_data);
        })
    })
}
module.exports = {
    mine_cf, mine_lan
}
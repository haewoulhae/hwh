const db = require("../config/db");
const logger = require("../config/logger");

async function hotList_cf() {
    return new Promise((resolve, reject) => {
        var queryData = `SELECT cf_like.cf_id, count(cf_like.cf_id) as cnt,
        comflower.cf_title title from cf_like inner join comflower
        on cf_like.cf_id = comflower.cf_id group by cf_like.cf_id`;
        db.query(queryData, (error, db_data) => {
            if(error) {
                logger.error(
                    'DB error [cf_like]' + 
                    '\n \t' + queryData +
                    '\n \t' + error
                )
                reject("DB ERR");
            }
            resolve(db_data);
        })
    })
}
async function hotList_lan() {
    return new Promise((resolve, reject) => {
        var queryData = `SELECT lan_like.lan_id, count(lan_like.lan_id) as cnt,
        language.lan_title title from lan_like inner join language
        on lan_like.lan_id = language.lan_id group by lan_like.lan_id`;
        db.query(queryData, (error, db_data) => {
            if(error) {
                logger.error(
                    'DB error [lan_like]' + 
                    '\n \t' + queryData +
                    '\n \t' + error
                )
                reject("DB ERR");
            }
            resolve(db_data);
        })
    })
}
async function hotMember() {
    return new Promise((resolve, reject) => {
        var queryData = `SELECT user_id, nikname, counting FROM user WHERE counting!=0`;
        db.query(queryData, (error, db_data) => {
            if(error) {
                logger.error(
                    'DB error [user]' + 
                    '\n \t' + queryData + 
                    '\n \t' + error
                )
                reject("DB ERR");
            }
            resolve(db_data)
        })
    })
}
module.exports = {
    hotList_cf, hotList_lan, hotMember
}
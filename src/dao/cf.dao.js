const db = require("../config/db");
const logger = require("../config/logger");

async function postBoard(req) {
    return new Promise((resolve, reject) => {
        var queryData = `query`;
        db.query(queryData, (error, db_data) => {
            if(error) {
                logger.error(
                    'DB error [table_name]' + 
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
    postBoard
}
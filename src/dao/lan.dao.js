const db = require("../config/db");

async function postLanBoard(req) {
  console.log(req.user_id);
  return new Promise((resolve, reject) => {
    var queryData = `insert into language(user_id, lan_category, lan_title, lan_content, lan_file, lan_post_time) 
        values (${req.user_id}, '${req.lan_category}', '${req.lan_title}', '${req.lan_content}', '${req.lan_file}', '${req.lan_post_time}')`;
    console.log(queryData);
    db.query(queryData, (error, db_data) => {
      if (error) {
        console.log("DB error [Board]" + "\n \t" + queryData + "\n \t" + error);
        reject("DB ERR");
      }
      resolve(db_data);
    });
  });
}
async function getLanBoard(req) {
  console.log(req.lan_id);
  return new Promise((resolve, reject) => {
    var queryData = `SELECT lan_id, user_id, lan_category, lan_title, lan_content, lan_file, lan_post_time, lan_edit_time
            FROM language 
            WHERE language.lan_id = ${req.lan_id}`;
    console.log(queryData);
    db.query(queryData, (error, db_data) => {
      if (error) {
        console.log("DB error [Board]" + "\n \t" + queryData + "\n \t" + error);
        reject("DB ERR");
      }
      resolve(db_data);
    });
  });
}
async function editLanBoard(req) {
  console.log(req.lan_id);
  return new Promise((resolve, reject) => {
    var queryData = `update language
        set lan_title='${req.lan_title}', lan_content=${req.lan_content}, lan_file=${req.lan_file}, lan_edit_time='${req.lan_edit_time}' 
        where lan_id=${req.lan_id} `;
    console.log(queryData);
    db.query(queryData, (error, db_data) => {
      if (error) {
        console.log("DB error [Board]" + "\n \t" + queryData + "\n \t" + error);
        reject("DB ERR");
      }
      resolve(db_data);
    });
  });
}
async function delLanBoard(req) {
  return new Promise((resolve, reject) => {
    var queryData = `delete from language 
        where lan_id=${req.lan_id} `;
    console.log(queryData);
    db.query(queryData, (error, db_data) => {
      if (error) {
        console.log("DB error [Board]" + "\n \t" + queryData + "\n \t" + error);
        reject("DB ERR");
      }
      resolve(db_data);
    });
  });
}

module.exports = {
  postLanBoard,
  editLanBoard,
  delLanBoard,
  getLanBoard,
};

const db = require("../config/db");
const logger = require("../config/logger");

async function postBoard(req) {
  return new Promise((resolve, reject) => {
    var queryData = `INSERT INTO comflower(user_id, cf_title, cf_content, cf_post_time, cf_category)
        values('${req.user_id}', '${req.cf_title}', '${req.cf_content}', '${req.cf_post_time}', '${req.cf_category}')`;
    console.log(queryData);
    db.query(queryData, (error, db_data) => {
      if (error) {
        logger.error(
          "DB error [table_name]" + "\n \t" + queryData + "\n \t" + error
        );
        reject("DB ERR");
      }
      resolve(db_data);
    });
  });
}
async function postEdit(req) {
  console.log(req.cf_id);
  return new Promise((resolve, reject) => {
    var queryData = `update comflower set
            cf_title = '${req.cf_title}', 
            cf_content = '${req.cf_content}'          
            where cf_id = ${req.cf_id}`;
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
async function postDel(req) {
  return new Promise((resolve, reject) => {
    var queryData = `DELETE FROM comflower WHERE cf_id = ${req.cf_id}`;
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
async function getBoard(req) {
  return new Promise((resolve, reject) => {
    var queryData = `SELECT comflower.*, user.nickname
    FROM comflower
    JOIN user ON comflower.user_id = user.user_id 
    WHERE comflower.cf_id = ${req.cf_id}`;
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
async function postCmt(req) {
  return new Promise((resolve, reject) => {
    var queryData = `INSERT INTO comment(comment_id, user_id, cf_id, content, comment_datetime, comment_like, comment_class, comment_group, comment_level)
        values('${req.comment_id}', '${req.user_id}', '${req.cf_id}', '${req.content}', '${req.comment_datetime}', '${req.comment_like}', '${req.comment_class}', '${req.comment_group}', '${req.comment_level}')`;
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
async function putCmt(req) {
  return new Promise((resolve, reject) => {
    var queryData = `UPDATE comment SET 
            content = '${req.content}', 
            comment_datetime = '${req.comment_datetime}'
            WHERE comment_id = '${req.comment_id}'`;
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
async function deleteCmt(req) {
  return new Promise((resolve, reject) => {
    var queryData = `DELETE FROM comment WHERE comment_id = ${req.comment_id}`;
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
async function getCmt(req) {
  return new Promise((resolve, reject) => {
    var queryData = `SELECT comment.*, user.nickname
            FROM comment
            JOIN user ON comment.user_id = user.user_id
            ORDER BY comment_group ASC, comment_class ASC`;
    db.query(queryData, (error, db_data) => {
      if (error) {
        console.log("DB error [Board]" + "\n \t" + queryData + "\n \t" + error);
        reject("DB ERR");
      }
      resolve(db_data);
    });
  });
}
async function getMaxCommentId() {
  const result = await db
    .promise()
    .query("SELECT MAX(comment_id) AS maxCommentId FROM comment");

  const maxCommentId = result[0][0].maxCommentId;

  return maxCommentId;
}
async function getMaxCommentGroup() {
  const result = await db
    .promise()
    .query("SELECT MAX(comment_group) AS maxCommentGroup FROM comment");

  const maxCommentGroup = result[0][0].maxCommentGroup;

  return maxCommentGroup;
}

module.exports = {
  postBoard,
  postEdit,
  postDel,
  getBoard,
  postCmt,
  putCmt,
  deleteCmt,
  getCmt,
  getMaxCommentId,
  getMaxCommentGroup,
};

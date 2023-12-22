const lanDao = require("../dao/lan.dao");

async function postBoard(req) {
  try {
    if (!req) {
      return {
        Message: "요청 값이 없습니다.",
        Status: 406,
      };
    }
    const postBoard_data = await lanDao.postBoard(req);
    return {
      Message: "성공",
      Status: 200,
      Data: postBoard_data,
    };
  } catch (err) {
    return {
      Message: "실패",
      Status: 400,
      Error_Message: err,
    };
  }
}

module.exports = {
  postBoard,
};

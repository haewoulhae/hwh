const lanDao = require("../dao/lan.dao");

async function postLanBoard(req) {
  try {
    if (!req) {
      return {
        Message: "요청 값이 없습니다.",
        Status: 406,
      };
    }
    const postLanBoard_data = await lanDao.postLanBoard(req);
    //등록 버튼 누를때마다 카운트++
    return {
      Message: "성공",
      Status: 200,
      Data: postLanBoard_data,
    };
  } catch (err) {
    return {
      Message: "실패",
      Status: 400,
      Error_Message: err,
    };
  }
}
async function editLanBoard(req) {
  try {
    if (!req) {
      return {
        Message: "요청 값이 없습니다.",
        Status: 406,
      };
    }
    const editLanBoard_data = await lanDao.editLanBoard(req);
    return {
      Message: "성공",
      Status: 200,
      Data: editLanBoard_data,
    };
  } catch (err) {
    return {
      Message: "실패",
      Status: 400,
      Error_Message: err,
    };
  }
}
async function delLanBoard(req) {
  try {
    if (!req) {
      return {
        Message: "요청 값이 없습니다.",
        Status: 406,
      };
    }
    const delLanBoard_data = await lanDao.delLanBoard(req);
    return {
      Message: "성공",
      Status: 200,
      Data: delLanBoard_data,
    };
  } catch (err) {
    return {
      Message: "실패",
      Status: 400,
      Error_Message: err,
    };
  }
}
async function getLanBoard(req) {
  try {
    if (!req) {
      return {
        Message: "요청 값이 없습니다.",
        Status: 406,
      };
    }
    const getLanBoard_data = await lanDao.getLanBoard(req);
    return {
      Message: "성공",
      Status: 200,
      Data: getLanBoard_data,
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
  postLanBoard,
  editLanBoard,
  delLanBoard,
  getLanBoard,
};

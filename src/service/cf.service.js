const cfDao = require("../dao/cf.dao");

async function postBoard(req) {
    try {
        if(!req) {
            return {
                "Message" : "요청 값이 없습니다.",
                "Status" : 406
            }
        }
        const postBoard_data = await cfDao.postBoard(req);
        return {
            "Message" : "성공",
            "Status" : 200,
            "Data" : postBoard_data
        }
    } catch(err) {
        return {
            "Message" : "실패",
            "Status" : 400,
            "Error_Message" : err
        }
    }
}
async function postEdit(req) {
    try {
        if(!req) {
            return {
                "Message" : "요청 값이 없습니다.",
                "Status" : 406
            }
        }
        const postEdit_data = await cfDao.postEdit(req);
        return {
            "Message" : "성공",
            "Status" : 200,
            "Data" : postEdit_data
        }
    } catch(err) {
        return {
            "Message" : "실패",
            "Status" : 400,
            "Error_Message" : err
        }
    }
}
async function postDel(req) {
    try {
        if(!req) {
            return {
                "Message" : "요청 값이 없습니다.",
                "Status" : 406
            }
        }
        const postDel_data = await cfDao.postDel(req);
        return {
            "Message" : "성공",
            "Status" : 200,
            "Data" : postDel_data
        }
    } catch(err) {
        return {
            "Message" : "실패",
            "Status" : 400,
            "Error_Message" : err
        }
    }
}
async function getBoard(req) {
    try {
        if(!req) {
            return {
                "Message" : "요청 값이 없습니다.",
                "Status" : 406
            }
        }
        const getBoard_data = await cfDao.getBoard(req);
        return {
            "Message" : "성공",
            "Status" : 200,
            "Data" : getBoard_data
        }
    } catch(err) {
        return {
            "Message" : "실패",
            "Status" : 400,
            "Error_Message" : err
        }
    }
}
async function postCmt(req) {
    try {
        if(!req) {
            return {
                "Message" : "요청 값이 없습니다.",
                "Status" : 406
            }
        }
        const postCmt_data = await cfDao.postCmt(req);
        return {
            "Message" : "성공",
            "Status" : 200,
            "Data" : postCmt_data
        }
    } catch(err) {
        return {
            "Message" : "실패",
            "Status" : 400,
            "Error_Message" : err
        }
    }
}
async function putCmt(req) {
    try {
        if(!req) {
            return {
                "Message" : "요청 값이 없습니다.",
                "Status" : 406
            }
        }
        const putCmt_data = await cfDao.putCmt(req);
        return {
            "Message" : "성공",
            "Status" : 200,
            "Data" : putCmt_data
        }
    } catch(err) {
        return {
            "Message" : "실패",
            "Status" : 400,
            "Error_Message" : err
        }
    }
}
async function deleteCmt(req) {
    try {
        if(!req) {
            return {
                "Message" : "요청 값이 없습니다.",
                "Status" : 406
            }
        }
        const deleteCmt_data = await cfDao.deleteCmt(req);
        return {
            "Message" : "성공",
            "Status" : 200,
            "Data" : deleteCmt_data
        }
    } catch(err) {
        return {
            "Message" : "실패",
            "Status" : 400,
            "Error_Message" : err
        }
    }
}
async function getCmt(req) {
    try {
        if(!req) {
            return {
                "Message" : "요청 값이 없습니다.",
                "Status" : 406
            }
        }
        const maxCommentId = await cfDao.getMaxCommentId();
        const maxCommentGroup = await cfDao.getMaxCommentGroup();
        const getCmt_data = await cfDao.getCmt(req);
        return {
            "Message" : "성공",
            "Status" : 200,
            "Data" : getCmt_data,
            "MaxCommentId": maxCommentId,
            "MaxCommentGroup": maxCommentGroup
        }
    } catch(err) {
        return {
            "Message" : "실패",
            "Status" : 400,
            "Error_Message" : err
        }
    }
}

module.exports = {
    postBoard,
    postEdit,
    postDel,
    getBoard,
    postCmt,
    putCmt,
    deleteCmt,
    getCmt
}
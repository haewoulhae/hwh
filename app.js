var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');

var cfRouter = require("./src/routes/cf.routes");
var lanRouter = require("./src/routes/lan.routes");
var loginRouter = require("./src/routes/login.routes");
var mypageRouter = require("./src/routes/mypage.routes");
var publicRouter = require("./src/routes/public.routes");

var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', express.static(path.join(__dirname,'public')));
app.use(cookieParser());

app.use("/main", publicRouter);
app.use("/main", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});
app.use("/cf", cfRouter);
app.use("/cf", (req, res) => {
    res.sendFile(__dirname + "/public/board.html");
});
app.use("/lan", lanRouter);
app.use("/lan", (req, res) => {
    res.sendFile(__dirname + "/public/board.html");
});
app.use("/list", publicRouter);
app.use("/list", (req, res) => {
    res.sendFile(__dirname + "/public/list.html");
})
app.use("/login", loginRouter);
app.use("/login", (req, res) => {
    res.sendFile(__dirname + "/public/Login.html");
});
app.use("/create", loginRouter);
app.use("/create", (req, res) => {
    res.sendFile(__dirname + "/public/CreateAcount.html");
});
app.use("/findid", loginRouter);
app.use("/findid", (req, res) => {
    res.sendFile(__dirname + "/public/FindID.html");
});
app.use("/findpw", loginRouter);
app.use("/findpw", (req, res) => {
    res.sendFile(__dirname + "/public/FindPW.html");
});
app.use("/mypage", mypageRouter);
app.use("/mypage", (req, res) => {
    res.sendFile(__dirname + "/public/MyPage.html");
});


// 포트 열리는지 테스트 !
// app.get('/', function(req, res) {
//     res.send('안뇽');
// })

// catch 404 and forward to error handler
// app.use(function (req, res, next) {
//     next(createError(404));
// n});

app.listen(5500,()=>{  //포트설정
    console.log('5500 포트에서 서버 대기중입니다!');
});

module.exports = app;
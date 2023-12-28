var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

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
    res.sendFile(__dirname + "src/public/index.html");
});
app.use("/cf", cfRouter);
app.get("/cf", (req, res) => {
    res.sendFile(__dirname + "/public/board.html");
});
app.use("/lan", lanRouter);
app.get("/lan", (req, res) => {
  res.sendFile(__dirname + "/public/posting.html");
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

app.listen(5500, () => {
  console.log("5500 포트에서 서버 대기중입니다!");
});

module.exports = app;

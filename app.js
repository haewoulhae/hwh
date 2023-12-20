<<<<<<< HEAD
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');

<<<<<<< HEAD
<<<<<<< HEAD
=======
var cfRouter = require("./src/routes/cf.routes");
var lanRouter = require("./src/routes/lan.routes");
var loginRouter = require("./src/routes/login.routes");
var mypageRouter = require("./src/routes/mypage.routes");
var publicRouter = require("./src/routes/public.routes");

>>>>>>> feature/list
=======
>>>>>>> feature/mypage
=======
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");

>>>>>>> feature/posting
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
// app.use('/', express.static(path.join(__dirname,'public')));
=======
//app.use('/', express.static(path.join(__dirname,'public')));
>>>>>>> feature/mypage
app.use(cookieParser());

app.get('/', function(req, res) {
    res.send('안뇽');
})

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

app.listen(5500,()=>{  //포트설정
<<<<<<< HEAD
    console.log('5500번 포트에서 서버 대기중입니다!');
=======
app.use('/', express.static(path.join(__dirname,'public')));
app.use(cookieParser());

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
app.use("login", loginRouter);
app.use("/login", (req, res) => {
    res.sendFile(__dirname + "/public/Login.html");
});
app.use("/mypage", mypageRouter);
app.use("/mypage", (req, res) => {
    res.sendFile(__dirname + "/public/MyPage.html");
});
app.use("/public", publicRouter);

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
>>>>>>> feature/list
=======
    console.log('2300번 포트에서 서버 대기중입니다!');
>>>>>>> feature/mypage
});

module.exports = app;
=======
//app.use("/", express.static(path.join(__dirname, "public")));
app.use(cookieParser());

app.get("/", function (req, res) {
  res.send("안뇽");
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

app.listen(5500, () => {
  //포트설정
  console.log("5500 포트에서 서버 대기중입니다!");
});

module.exports = app;
>>>>>>> feature/posting

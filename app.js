var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');

var cfRouter = require("./src/routes/cf.routes");
// var cfCmtRouter = require("./src/routes/cf_cmt.routes");
var lanRouter = require("./src/routes/lan.routes");
var loginRouter = require("./src/routes/login.routes");
var mypageRouter = require("./src/routes/mypage.routes");
var publicRouter = require("./src/routes/public.routes");

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', express.static(path.join(__dirname,'public')));    //d
app.use(cookieParser());

// app.get('/style.css', (req, res) => {
//     res.type('text/css');
//     res.sendFile(__dirname + '/public/style.css');
// });
// app.get('/posting.css', (req, res) => {
//     res.type('text/css');
//     res.sendFile(__dirname + '/public/style.css');
// });

// app.get('/index.js', (req, res) => {
//     res.type('application/javascript');
//     res.sendFile(__dirname + '/public/index.js');
// });

app.use("/main", (req, res) => {
    res.sendFile(__dirname + "src/public/index.html");
});
app.use("/cf", cfRouter);
app.get("/cf", (req, res) => {
    res.sendFile(__dirname + "/public/board.html");
});




// app.use("/cfCmt", cfCmtRouter);

// app.get("/cfCmt", (req, res) => {
//     res.sendFile(__dirname + "/public/board.html"); 
// });


// // app.get("/cfCmt", (req, res) => {
// //     return res.sendFile(path.join(__dirname, "public", "board.html")); 
// // });

// app.use("/cfCmt", express.static(path.join(__dirname, 'public')));


// app.use("/cfCmt", cfCmtRouter);


// // app.get("/cfCmt", (req, res) => {
// //     res.sendFile(path.join(__dirname, "public", "board.html")); 
// // });


// app.use("/cfCmt", express.static(path.join(__dirname, 'public', 'image')));
// app.use("/cfCmt", cfCmtRouter);
// app.get("/cfCmt", (req, res) => {
//     res.sendFile(path.join(__dirname, "public", "board.html")); 
// });





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
});

module.exports = app;
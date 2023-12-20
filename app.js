var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use('/', express.static(path.join(__dirname,'public')));
app.use(cookieParser());

app.get('/', function(req, res) {
    res.send('안뇽');
})

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

app.listen(5500,()=>{  //포트설정
    console.log('2300번 포트에서 서버 대기중입니다!');
});

module.exports = app;
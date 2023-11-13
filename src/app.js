require('dotenv').config()
var express = require('express');
var app = express();
var mysql = require('mysql2')

// Create the connection to the database
const connection = mysql.createConnection(process.env.DATABASE_URL)

app.get('/', function(req, res) {
    res.send('안뇽');
})

app.listen(5000);

// // simple query
// connection.query('show tables', function (err, results, fields) {
//   console.log(results) // results contains rows returned by server
//   console.log(fields) // fields contains extra metadata about results, if available
// })

// // Example with placeholders
// connection.query('select 1 from dual where ? = ?', [1, 1], function (err, results) {
//   console.log(results)
// })

// connection.end()

//수정 가능성 있음
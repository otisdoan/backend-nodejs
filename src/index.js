require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const configViewEngine = require('./configs/viewEngine')
const webRouter = require('./routes/web')
const mysql = require('mysql2');

const port = process.env.PORT;

configViewEngine(app);

app.use('/', webRouter);

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3307,
  user: 'root',
  password: 'Anhzac12345@#!',
  database: 'otisdoan'
})

connection.query(
  'select * from Users',
  (err, results) => {
    console.log(results);
  }
)
app.listen(port)
require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const configViewEngine = require('./configs/viewEngine')
const webRouter = require('./routes/web')
// const connection = require('./configs/database')
const mysql = require('mysql2');

const port = process.env.PORT;

configViewEngine(app);

app.use('/', webRouter);

app.get('/old', async (req, res) => {
  var total = 0;
  for (var i = 1; i < 1000; i++) {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    })

    await connection.connect(
      'select * from Users',
    )

    total++;
  }
  res.send(`Average: ${total / 1000}`)
})

app.get('/pool', async (req, res) => {
  var total = 0;
  for (var i = 1; i < 1000; i++) {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      waitForConnections: true,
      connectionLimit: 1000,
      queueLimit: 0
    })

    await connection.connect(
      'select * from Users',
    )

    total++;
  }
  res.send(`Average: ${total / 1000}`)
})
// connection.query(
//   'select * from Users',
//   (err, results) => {
//     console.log(results);
//   }
// )

app.listen(port)
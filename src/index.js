require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const configViewEngine = require('./configs/viewEngine')
const webRouter = require('./routes/web')
const connection = require('./configs/database')

const port = process.env.PORT;

configViewEngine(app);

app.use('/', webRouter);


connection.query(
  'select * from Users',
  (err, results) => {
    console.log(results);
  }
)
app.listen(port)
require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const configViewEngine = require('./configs/viewEngine')

const port = process.env.PORT;

configViewEngine(app);

app.get('/', (req, res) => {
  res.render('sample.ejs')
})
app.listen(port)
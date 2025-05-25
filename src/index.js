const express = require('express');
const path = require('path');
const app = express();
require('dotenv').config();

const port = process.env.PORT;

app.use(express.static(path.join(__dirname, 'public')))


app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('sample.ejs')
})
app.listen(port)
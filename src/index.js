require('dotenv').config();
const express = require('express');
const app = express();
const configViewEngine = require('./configs/viewEngine')
const webRouter = require('./routes/web')
const methodOverride = require('method-override');
const connectDB = require('./configs/database')

const port = process.env.PORT;

configViewEngine(app);
connectDB();

app.use(methodOverride('_method'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', webRouter);

app.listen(port)
const exppress = require('express');
const { getUser } = require('../controller/apiController');
const routes = exppress.Router();

routes.get('/users', getUser);

module.exports = routes;
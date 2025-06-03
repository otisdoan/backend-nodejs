const exppress = require('express');
const { getUser, createUsers, updateUsers, deleteUsers } = require('../controller/apiController');
const userValidate = require('../middleware/userValidate');
const routes = exppress.Router();

routes.get('/users', getUser);
routes.post('/users', userValidate, createUsers);
routes.patch('/users/:id', updateUsers);
routes.delete('/users/:id', deleteUsers);

module.exports = routes;  
const express = require('express')
const router = express.Router();
const { getHome, addUser, getAddUser, getUpdateUser, pathUpdateUser, deleteUser } = require('../controller/homeController');

router.get('/', getHome);
router.post('/create-user', addUser);
router.get('/create', getAddUser);
router.get('/update/:id', getUpdateUser);
router.patch('/update-user/:id', pathUpdateUser);
router.delete('/delete-user/:id', deleteUser);

module.exports = router;
const express = require('express')
const router = express.Router();
const { getHome, addUser, getAddUser, getUpdateUser } = require('../controller/homeController');

router.get('/', getHome);
router.post('/create-user', addUser);
router.get('/create', getAddUser);
router.get('/update/:id', getUpdateUser)
module.exports = router;
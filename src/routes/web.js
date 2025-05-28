const express = require('express')
const router = express.Router();
const { getHome, addUser, getAddUser } = require('../controller/homeController');

router.get('/', getHome);
router.post('/create-user', addUser);
router.get('/create', getAddUser);

module.exports = router;
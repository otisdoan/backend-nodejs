const express = require('express')
const router = express.Router();
const { getHome, addUser } = require('../controller/homeController');

router.get('/', getHome);
router.post('/create-user', addUser);

module.exports = router;
const User = require('../models/User');
const { getAllUser } = require('../services/CRUDServices');

const getUser = async (req, res) => {
  const users = await getAllUser();
  if (users) {
    res.status(200).json({
      data: users
    })
  }
}

module.exports = {
  getUser,
}
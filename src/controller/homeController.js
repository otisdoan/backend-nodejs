const connection = require('../configs/database');
const { getAllUser, createUser } = require('../services/CRUDServices');

const getHome = async (req, res) => {
  const results = await getAllUser();
  res.render('home.ejs', { users: results })
}

const addUser = async (req, res) => {
  await createUser(req.body);
  res.redirect('/')
}

const getAddUser = (req, res) => {
  res.render('create.ejs');
}

const getUpdateUser = (req, res) => {
  console.log(req.params.id);
  res.render('edit.ejs');
}

module.exports = {
  getHome,
  addUser,
  getAddUser,
  getUpdateUser
}
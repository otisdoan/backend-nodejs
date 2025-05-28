const connection = require('../configs/database');
const { getAllUser, createUser, inforUserEdit } = require('../services/CRUDServices');

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

const getUpdateUser = async (req, res) => {
  const infor = await inforUserEdit(req.params.id);
  res.render('edit.ejs', { infor: infor });
}

module.exports = {
  getHome,
  addUser,
  getAddUser,
  getUpdateUser
}
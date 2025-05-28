const connection = require('../configs/database');
const { getAllUser, createUser, inforUserEdit, updateUser, deleteUserById } = require('../services/CRUDServices');

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

const pathUpdateUser = async (req, res) => {
  await updateUser(req.body, req.params.id);
  res.redirect('/');
}

const deleteUser = async (req, res) => {
  await deleteUserById(req.params.id);
  res.redirect('/');

}

module.exports = {
  getHome,
  addUser,
  getAddUser,
  getUpdateUser,
  pathUpdateUser,
  deleteUser
}
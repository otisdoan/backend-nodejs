
const userValidate = require('../middleware/userValidate');
const { getAllUser, createUser, updateUser, deleteUserById } = require('../services/CRUDServices');

const getUser = async (req, res) => {
  const users = await getAllUser();
  if (users) {
    res.status(200).json({
      data: users
    })
  }
}

const createUsers = async (req, res) => {
  const user = await createUser(req.body);
  return res.status(201).json({
    status: 'success',
    message: 'User created successfully',
    data: user
  })
}

const updateUsers = async (req, res) => {
  const user = await updateUser(req.body, req.params.id);
  return res.status(200).json({
    status: 'success',
    message: 'User updated successfully',
    data: user
  })
}

const deleteUsers = async (req, res) => {
  await deleteUserById(req.params.id);
  return res.status(200).json({
    status: 'success',
    message: 'User deleted successfully'
  })
}

module.exports = {
  getUser,
  createUsers,
  updateUsers,
  deleteUsers
}
const connection = require('../configs/database');
const User = require('../models/User');

const getAllUser = async () => {
  const results = await User.find() || [];
  return results;
}

const createUser = async (body) => {
  const results = await User.create(body)
  return results;
}

const inforUserEdit = async (id) => {
  const infor = await User.findById(id) || {}
  return infor;
}

const updateUser = async (body, id) => {
  const results = await User.findByIdAndUpdate(id, body);
  return results;
}

const deleteUserById = async (id) => {
  const results = await User.findByIdAndDelete(id)
  return results;
}

module.exports = {
  getAllUser,
  createUser,
  inforUserEdit,
  updateUser,
  deleteUserById
}
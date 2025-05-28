const connection = require('../configs/database');

const getAllUser = async () => {
  const [results] = await connection.query('select * from Users');
  return results;
}

const createUser = async (body) => {
  const { email, name, city } = body;
  const [results] = await connection.query('insert into Users (email, name, city) values (?, ?, ?)', [email, name, city]);
  return results;
}

const inforUserEdit = async (id) => {
  const [infor] = await connection.query('select * from Users where id = ?', [id]);
  return infor && infor.length > 0 ? infor[0] : {};
}

const updateUser = async (body, id) => {
  const { email, name, city } = body;
  const results = await connection.query('update Users set email = ?, name = ?, city = ? where id = ?', [email, name, city, id]);
  return results;
}

const deleteUserById = async (id) => {
  const results = await connection.query('delete from Users where id = ?', [id]);
  return results;
}

module.exports = {
  getAllUser,
  createUser,
  inforUserEdit,
  updateUser,
  deleteUserById
}
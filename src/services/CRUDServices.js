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

module.exports = {
  getAllUser,
  createUser
}
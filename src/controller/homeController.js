const connection = require('../configs/database');

const getHome = async (req, res) => {
  const [results] = await connection.query('select * from Users');
  res.render('home.ejs', { users: results })
}

const addUser = async (req, res) => {
  const { email, name, city } = req.body;
  const [results] = await connection.query('insert into Users (email, name, city) values (?, ?, ?)', [email, name, city]);
  console.log(results);
  res.redirect('/')
}

const getAddUser = (req, res) => {
  res.render('create.ejs');
}

module.exports = {
  getHome,
  addUser,
  getAddUser
}
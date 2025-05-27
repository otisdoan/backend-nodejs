const connection = require('../configs/database');

const getHome = (req, res) => {
  res.render('home.ejs')
}

const addUser = (req, res) => {
  const { email, name, city } = req.body;
  const query = 'INSERT INTO Users (email, name, city) VALUES (?, ?, ?)';
  connection.query(
    query,
    [email, name, city],
    (err, results) => {
      console.log(results);
      res.send('Ok')
    }
  )
}

module.exports = {
  getHome,
  addUser
}
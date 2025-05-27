const getHome = (req, res) => {
  res.render('home.ejs')
}

const addUser = (req, res) => {
  res.send('Ok')
}

module.exports = {
  getHome,
  addUser
}
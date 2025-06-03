const userValidate = (req, res, next) => {
  const { name, email, city } = req.body;
  if (!name || !email || !city) {
    return res.status(400).json({
      status: 'error',
      message: 'Bad request'
    })
  }
  next();
}
module.exports = userValidate
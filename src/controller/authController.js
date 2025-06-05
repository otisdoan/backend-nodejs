const bcrypt = require('bcryptjs');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
  try {
    const hashed = await bcrypt.hash(req.body.password, 10);
    const newUser = new User({ username: req.body.username, password: hashed });
    await newUser.save();
    return res.status(201).json({
      status: 'success',
      message: 'User created',
      data: newUser
    })
  } catch (error) {
    res.status(500).json(error)
  }
}

const login = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return res.status(404).json('User not found');

    const valid = await bcrypt.compare(req.body.password, user.password);
    if (!valid) return res.status(401).json('Wrong password');

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    )
    return res.json({ token });
  } catch (error) {
    res.status(500).json(error)
  }
}
module.exports = {
  register,
  login
}
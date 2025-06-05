const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.status(403).json('Access defined');

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(401).json('Invalid token');
    req.user = user;
    next();
  })
}

const isAdmin = (req, res, next) => {
  if (req.user.role !== 'admin') return res.status(403).json('Admin only');
  next();
}

module.exports = {
  verifyToken,
  isAdmin
}
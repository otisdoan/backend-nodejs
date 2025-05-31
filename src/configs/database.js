require('dotenv').config();
const mongoose = require('mongoose');

try {
  const connection = mongoose.connect('mongodb://admin:123456@localhost:27018')
  console.log("Connected!")
  return connection;
} catch (error) {
  console.log(error)
}

console.log('connection', connection);


module.exports = connection;
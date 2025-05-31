require('dotenv').config();
const mongoose = require('mongoose');

const connection = mongoose.connect('mongodb://admin:123456@localhost:27017')
  .then((connect) => console.log('Connected!', connect)).catch((error) => {
    console.log(error)
  });

console.log('connection', connection);


module.exports = connection;
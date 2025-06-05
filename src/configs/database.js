require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = () => {
  try {
    const connection = mongoose.connect(process.env.MONGO_URL)
    return connection;
  } catch (error) {
    console.log(error)

  }
}
module.exports = connectDB;
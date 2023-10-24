const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('user', {
  username: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
  },
  phone_number: {
    type: DataTypes.INTEGER,
  },
});

User.sync(); // Automatically create the table if it doesn't exist

module.exports = User;

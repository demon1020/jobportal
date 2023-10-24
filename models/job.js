const { DataTypes } = require('sequelize');
const db = require('../config/database'); // Your Sequelize database connection

const Job = db.define('Job', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  company: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  elapsedString: {
    type: DataTypes.STRING,
  },
  isFavourite: {
    type: DataTypes.BOOLEAN,
  },
  isFixedPrice: {
    type: DataTypes.BOOLEAN,
  },
  isOnSite: {
    type: DataTypes.BOOLEAN,
  },
  isPaymentVerified: {
    type: DataTypes.BOOLEAN,
  },
  location: {
    type: DataTypes.STRING,
  },
  maxPrice: {
    type: DataTypes.DECIMAL(10, 2),
  },
  minPrice: {
    type: DataTypes.DECIMAL(10, 2),
  },
  postedOn: {
    type: DataTypes.DATE,
  },
  priceUnit: {
    type: DataTypes.STRING,
  },
});

Job.sync(); // Automatically create the table if it doesn't exist

module.exports = Job;

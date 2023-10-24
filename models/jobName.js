const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const JobName = sequelize.define('jobname', {
  job_title: {
    type: DataTypes.STRING,
  },
});

JobName.sync(); // Automatically create the table if it doesn't exist

module.exports = JobName;

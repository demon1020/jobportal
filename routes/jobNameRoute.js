const express = require('express');
const router = express.Router();
const JobName  = require('../models/jobName'); // Import the JobName model
const { Op } = require('sequelize'); // Import the Sequelize operator

// Define a route to get job names based on a searchQuery
router.get('/', async (req, res) => {
    try {
      const { searchQuery } = req.query;
  
      // Define the conditions for the query
      const conditions = searchQuery
        ? {
            job_title: {
              [Op.like]: `%${searchQuery}%`,
            },
          }
        : {};
  
      const jobNames = await JobName.findAll({
        where: conditions,
      });
  
      res.json({status: 200, message: "Fetched data successfully",data : jobNames});
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred while fetching job names.' });
    }
  });
  

module.exports = router;

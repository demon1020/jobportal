const express = require('express');
const router = express.Router();
const Job  = require('../models/job'); // Import the Job model
const { Sequelize, Op } = require('sequelize');

// Define a route to get jobs based on a search query
router.get('/search', async (req, res) => {
  try {
    const searchQuery = req.query.searchQuery;

    if (searchQuery !== undefined) {
      const jobs = await Job.findAll({
        where: {
          title: {
            [Sequelize.Op.like]: `%${searchQuery}%`,
          },
        },
      });
      res.status(200).json({status: 200, message: "Fetched data successfully",data : jobs});
    } else {
      const jobs = await Job.findAll();
      res.status(200).json({status: 200, message: "Fetched data successfully",data : jobs});
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while fetching jobs.' });
  }
});

module.exports = router;

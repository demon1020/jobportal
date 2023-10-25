const express = require('express');
const User = require('../models/user');
const { Op } = require('sequelize');
const router = express.Router();

// Create a new user
router.post('/signup', async (req, res) => {
  try {
    const { email } = req.body;
     // Check if a user with the provided email or username already exists
     const existingUser = await User.findOne({
        where: {
          [Op.or]: [{ email }],
        },
      });
  
      if (existingUser) {
        // User with the same email or username already exists
        return res.status(400).json({ message: `User with email '${email}' already exists.` });
      }
      
    const user = await User.create(req.body);
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while creating the user.' });
  }
});

// Fetch all users
router.get('/', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while fetching users.' });
  }
});

// Fetch a user by email and password
router.post('/signin', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email, password } });

    if (user) {
      // User found, authentication successful
      res.json(user);
    } else {
      // User not found, return authentication error
      res.status(401).json({ message: 'Authentication failed. Invalid email or password.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({message: 'An error occurred during authentication.' });
  }
});
module.exports = router;

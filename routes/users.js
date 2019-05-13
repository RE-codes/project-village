const express = require('express');

const router = express.Router();

const User = require('../models/User');

// @route   GET /users/test
// @desc    Test route
// @access  Public
router.get('/test', (req, res) => res.send('User route works!'));

// @route   POST /users/signup
// @desc    Sign up new user
// @access  Public
router.post('/signup', (req, res) => {
  // Create error object
  const errors = {};

  // Check if user already exists
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      errors.user = 'User already exists';
      return res.status(400).json(errors);
    }
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    });
    newUser
      .save()
      .then(u =>
        res.json({
          id: u._id,
          name: u.name,
          email: u.email
        })
      )
      .catch(err => console.error(err));
  });
});

// @route   POST /users/login
// @desc    Login user
// @access  Public
router.post('/login', (req, res) => {
  // Create error object
  const errors = {};
  // Find user by email
  const { email, password } = req.body;
  User.findOne({ email })
    .then(user => {
      // Check if user exists
      if (!user) {
        errors.user = 'User does not exist';
        return res.status(400).json(errors);
      }
      // Check password
      if (password !== user.password) {
        errors.password = 'Password incorrect';
        return res.status(400).json(errors);
      }
      // User and password are valid
      res.json({
        id: user._id,
        name: user.name,
        email: user.email
      });
    })
    .catch(err => console.error(err));
});

module.exports = router;

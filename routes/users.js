// requiring dependencies
const express = require('express');
const userRoutes = express.Router();
const authHelpers = require('../auth/auth-helpers');

// users listing
userRoutes.get('/', authHelpers.loginRequired, (req, res) => {
  res.json({ user: 'user profile page placeholder', userInfo: req.user });
});

module.exports = userRoutes;

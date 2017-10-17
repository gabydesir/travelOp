// requiring dependencies
const express = require('express');
const userRoutes = express.Router();
const authHelpers = require('../auth/auth-helpers');
const userController = require('../controllers/userController');
const postRoutes = require('./travel-route');

// users listing
userRoutes.get('/', authHelpers.loginRequired, userController.index);

module.exports = userRoutes;

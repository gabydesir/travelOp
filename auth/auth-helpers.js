// requiring auth dependencies
const bcrypt = require('bcryptjs');
const User = require('../models/user');

// function that will use bcrypt to compare passwords
// input from user vs whats stored in db
function comparePass(userPassword, databasePassword) {
  return bcrypt.compareSync(userPassword, databasePassword);
}

// if user is login give access to all posts
function loginRedirect(req, res, next) {
  if (req.user) return res.redirect('/post');
  return next();
}

// create new user
// hash to secure the password
function createNewUser(req) {
  console.log("inside createNewUser", req.body.username)
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(req.body.password, salt);
  return User.create({
    username: req.body.username,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: hash,
  });
}

// login function to start an user's session
function loginRequired(req, res, next) {
  if (!req.user) return res.redirect('/auth/login');

  return next();
}

// logout function to end the user's session
// redirect to homepage
function logOut (req, res, next) {
  if (req.user){
    req.logout();
    res.redirect('/');
  }
}

// exporting required dependencies
module.exports = {
  comparePass,
  loginRedirect,
  loginRequired,
  logOut,
  createNewUser,
};


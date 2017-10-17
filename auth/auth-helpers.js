// requiring auth dependencies
const bcrypt = require('bcryptjs');
const User = require('../models/user');

// function that will use bcrypt to compare passwords
// input from user vs whats stored in db
function comparePass(userPassword, databasePassword) {
  return bcrypt.compareSync(userPassword, databasePassword);
}

function loginRedirect(req, res, next) {
  if (req.user) return res.redirect('/post');
  console.log("user:", req.user);
  return next();
}

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

function loginRequired(req, res, next) {
  if (!req.user) res.redirect('/auth/login');

  return next();
}

function logOut (req, res, next) {
  if (req.user) res.redirect('/');
}

  // return next();



module.exports = {
  comparePass,
  loginRedirect,
  loginRequired,
  logOut,
  createNewUser,
};


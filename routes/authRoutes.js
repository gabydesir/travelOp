// requiring dependencies
const express = require('express');
const authRouter = express.Router();
const passport = require('../auth/local');
const authHelpers = require('../auth/auth-helpers');

authRouter.get('/login', authHelpers.loginRedirect, (req, res) => {
  res.render('auth/login');
});

authRouter.get('/register', authHelpers.loginRedirect, (req, res) => {
  res.render('auth/register');
});

authRouter.post('/register', (req, res, next) => {
  authHelpers.createNewUser(req)
    .then((user) => {
      console.log(user);
      // req.login(user, (err) => {
      //   if (err) return next(err);

      //   res.redirect('/user');
      // });
    })
    .catch((err) => { res.status(500).json({ status: 'error' }); });
});
// what I was missing
authRouter.get('/login', authHelpers.loginRedirect, (req, res) => {
  res.render('auth/login');
});

authRouter.post('/login', passport.authenticate('local', {
  successRedirect: '/user',
  failureRedirect: '/auth/login',
  failureFlash: true }));

authRouter.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = authRouter;


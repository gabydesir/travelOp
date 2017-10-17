// requiring dependencies
const express = require('express');
const authRouter = express.Router();
const passport = require('../auth/local');
const authHelpers = require('../auth/auth-helpers');
const userController = require('../controllers/userController');

authRouter.get('/login', authHelpers.loginRedirect, (req, res) => {
  res.render('auth/login', {
    user: req.user
  });
});

authRouter.get('/register', authHelpers.loginRedirect, (req, res) => {
  res.render('auth/register');
});

authRouter.get('/logout', authHelpers.logOut, (req, res) => {
  res.render('auth/login');
});

// authRouter.post('/register', (req, res, next) => {
//   authHelpers.createNewUser(req, res)
//     .then((user) => {
//       console.log(user,'--- maybe user');
//       req.login(user, (err) => {
//         console.log("authHelper: ", user)
//         if (err) return next(err);

//         res.redirect('/user');
//       });
//     })
//     .catch((err) => { res.status(500).json({ status: 'error' }); });
// });
// what I was missing
// authRouter.get('/login', authHelpers.loginRedirect, (req, res) => {
//   res.render('auth/login');
// });

authRouter.post('/register', userController.create);

authRouter.post('/login', passport.authenticate('local', {
  successRedirect: '/post',
  failureRedirect: '/auth/login',
  failureFlash: true }));

authRouter.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/now');
});

module.exports = authRouter;


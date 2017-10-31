// requiring dependencies
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const init = require('./passport');
const User = require('../models/user');
const authHelpers = require('./auth-helpers');

const options = {};

init();

// compare user input and what is in db
// if its the same give user access
passport.use(
  new LocalStrategy(options, (username, password, done) => {
    User.findByUserName(username)
      .then(user => {
        if (!user) {
          return done(null, false);
        }
        if (!authHelpers.comparePass(password, user.password)) {
          return done(null, false);
        } else {
          return done(null, user);
        }
      })
      .catch(err => {
        console.log(err);
        return done(err);
      });
  })
);


module.exports = passport;

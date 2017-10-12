// requiring all the needed dependencies
require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const logger = require('morgan');
const path = require('path');
const passport = require('passport'); // dependency for authentication
const session = require('express-session');
const methodOverride = require('method-override');
const pg = require('pg-promise');
const cookieParser = require('cookie-parser');
const Twit = require('twit');// dependency for Twitter API
const port = 3000;

// logging the dependencies
// setting up logger
app.use(logger('dev'));
// setting up body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false,
}));
app.use(methodOverride('_method'));
app.use(cookieParser());
app.use(bodyParser.json());

// setting up passport middleware for authentication
app.use(session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());

// setting up static files
app.use(express.static(path.join(__dirname, 'public')));

// setting up ejs template
app.set('view engine', 'ejs');

const authRouter= require('./routes/authRoutes');
app.use('/auth', authRouter);

const userRoutes = require('./routes/users');
app.use('/user', userRoutes);

const postRoutes = require('./routes/travel-route');
app.use('/post', postRoutes);

// Listening on PORT
app.listen(port, () => {
  // to prove it worked, print to the terminal
  console.log(`My awesome app is listening on port ${port}`);
});

app.get('/', function(req,res){
  res.send('HELLOoOOOoOOoOOOooO! <h1>Welcome to TravelOp </h1>');
});

module.exports = app;


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
const pgp = require('pg-promise');
const cookieParser = require('cookie-parser');
const Twit = require('twit');// dependency for Twitter API
const PORT =  process.env.PORT || 3001;
const cloudinary = require('cloudinary');
const cloudinaryC = require('cloudinary-core');
const axios = require('axios');

// setting up routes
app.use('/now', function (req, res, next) {
  return res.render('index1.html');
});


// logging the dependencies
// setting up logger, body-parser, method-override
app.use(logger('dev'));
// setting up body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false,
}));
app.use(methodOverride('_method'));
app.use(cookieParser());


// setting up passport middleware for authentication
app.use(session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());

// use this for local host and the other for heroku
// setting up static files
app.use(express.static(path.join(__dirname, 'public')));


// setting up ejs template
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html', 'ejs');

app.set('view engine', 'ejs');

const authRouter = require('./routes/authRoutes');
app.use('/auth', authRouter);

const userRoutes = require('./routes/users');
app.use('/user', userRoutes);

const postRoutes = require('./routes/travel-route');
app.use('/post', postRoutes);


// get request handler for POSTS => main route
app.get('/', (req, res) => {
  res.render('index', {
    // message: 'HELLOoOOOoOOoOOOooO',
    // subtitle: 'Welcome to TravelOp',
  });
});

app.get('/api/twitter', (req, res) => {
  const T = new Twit({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    app_only_auth: true,
  });

  const params = { q: 'travel OR wanderlust OR jetsetter OR traveller', count: 25  };

  const tweetData = (err, data, response) => {
   console.log('inside tweet data')
    res.json({
      data: data.statuses[0].text,
    });
  };

  T.get('search/tweets', params, tweetData);
});
// res.send => on index to render on the /
// then have the second part of the function into a separate function

app.get('/api', (req, res) => {
  res.send('hello')
    // axios.get('/api/twitter')
    //   .then((res) => {
    //     console.log(res)
// no need for second API call =>
});

// Listening on PORT
app.listen(PORT, () => {
  // to prove it worked, print to the terminal
  console.log(`TravelOp is listening on port ${PORT}`);
});

module.exports = app;

// requiring dependencies
const Post = require('../models/post');

// const postController = {};
module.exports = {

// setting up controller which handles all the posts

  index(req, res, next) {
    Post.findAll()
      .then((posts) => {
        res.locals.posts = posts;
        next();
      })
      .catch(err => next(err));
  },

  show(req, res, next) {
    console.log('yo')
    Post.findById(req.params.id)
      .then((post) => {
        console.log(req.params.id)
        res.locals.post = post;
        next();
      })
      .catch(err => next(err));
  },

  create(req, res, next) {

    Post.create({
      user_id: (req.body.user_id),
      description: (req.body.description),
      image: (req.body.image),
    })
      .then((post) => {
        res.locals.post = post;
        next();
      })
      .catch(err => next(err));
  },

  update(req, res, next) {
    console.log("inside create: ", req.body)
    // Post.update(req.body)
    Post.update({
      id: (req.body.id),
      description: (req.body.description),
      image: (req.body.image),
    })
      .then((post) => {
        res.locals.post = post;
        next();
      })
      .catch(err => next(err));
  },

  destroy(req, res, next) {
    Post.destroy(req.params.id)
      .then(() => next())
      .catch(err => next(err));
  },

};
// module.exports = postController;

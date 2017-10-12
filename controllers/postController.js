// requiring dependencies
const Post = require('../models/post');

// const postController = {};
module.exports = {

// setting up controller which handles all the posts

  index(req, res, next) {
    Post.findAll()
      .then((posts) => {
        res.locals.posts = posts;
        console.log(posts);

        next();
      })
      .catch(err => next(err));
  },

  show(req, res, next) {
    console.log('here', req.params.id)
    Post.findById(req.params.id)
      .then((post) => {
        res.locals.post = post;
        console.log(post);
        next();
      })
      .catch(err => next(err));
  },

  create(req, res, next) {
    //Post.create(req.body)
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
    // Post.update(req.body)
  Post.update({
    id: (req.body.post),
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

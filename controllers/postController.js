// requiring dependencies
const Post = require('../models/post');

const postController = {};

// setting up controller which handles all the posts
postController.index = (req, res) => {
  Post.findAll()
    .then((posts) => {
      res.json({
        message: 'ok',
        data: { posts },
      });
      console.log(ideas)
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ message: '400', err });
    });
};

postController.show = (req, res) => {
  Post.findById(req.params.id)
    .then((post) => {
      res.json({
        message: 'ok',
        data: { post },
      });
    })
    .catch((err) => {
      res.status(400).json({ message: '400', err });
    });
};

postController.create = (req, res) => {
  console.log(req.body);
  Post.create({
    user_id: (req.body.user_id),
    description: (req.body.description),
    image: (req.body.image),
  })
    .then((post) => {
      res.json({ message: 'post created', data: { post } });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ message: '400', err });
    });
};

postController.update = (req, res) => {
  Post.update({
    id: (req.body.post),
    description: (req.body.description),
    image: (req.body.image),
  })
    .then((post) => {
      res.json({ message: 'post updated' });
    })
    .catch((err) => {
      res.status(500).json({ message: '500', err });
    });
};

postController.destroy = (req, res) => {
  Post.destroy(req.params.id)
    .then(() => {
      res.json({ message: 'post deleted' });
    })
    .catch((err) => {
      res.status(500).json({ message: '500', err });
    });
};

module.exports = postController;

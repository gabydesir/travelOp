// post model to maintain post database
// allowing users to create, read, update & delete

const dbp = require('../config/configdb');
const pgp = require('pg-promise')();

// const Post = {};

// setting user selection happening in the post table
// user can see all posts

module.exports = {
  findAll() {
    return dbp.query(
      `
      SELECT * FROM posts`,
      //ORDER BY date_created DESC
    );
  },

  // user can see a post
  findById(id) {
    return dbp.oneOrNone(
      `
      SELECT * FROM posts
      WHERE id = $1`,
      [id],
    );
  },

  // user can create a post
  create(post) {
    return dbp.one(
      `
      INSERT INTO posts (user_id, description, image)
      VALUES ($/user_id/, $/description/, $/image/)
      RETURNING * `,
      post,
    );
  },

  // user can update a post
  update(post) {
    return dbp.one(
      `
      UPDATE posts
      SET
      description = $/description/,
      image = $/image/
      WHERE id = $/id/
      RETURNING * `,
      post,
    );
  },

  // user can delete a post
  destroy(id) {
    return dbp.none(
      `
      DELETE FROM posts
      WHERE id = $1`,
      [id],
    );
  },
};

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
      `SELECT * FROM posts
      ORDER BY date_uploaded DESC`,

      // `SELECT * FROM posts
      // JOIN categories
      // ON posts.category_id = categories.id
      // ORDER BY date_uploaded DESC`,
    );
  },

  // findCountry(filter) {
  //     return dbp.many(
  //       `SELECT posts.id, posts.description, posts.image
  //       FROM posts INNER JOIN categories
  //       ON posts.category_id = category_id
  //       WHERE category.country = $/country/
  //       ORDER by id`,
  //       filter);
  // },

  // user can see a post
  findById(id) {
    return dbp.oneOrNone(
      `
      SELECT * FROM posts
      WHERE id = $1`,
      [id],

      // `SELECT posts.id, posts.description, posts.image
      // FROM posts JOIN categories
      // ON posts.category_id = categories.id
      // WHERE posts.id = $1`,
      // [id],
    );
  },

  // user can create a post
  create(post) {
    return dbp.one(
      `
      INSERT INTO posts (user_id, country, description, image)
      VALUES ($/user_id/, $/country/, $/description/, $/image/)
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
      country = $/country/,
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

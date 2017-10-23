const db = require('../config/configdb');
const User = {};

User.findByUserName = (userName) => db.oneOrNone(
    `
    SELECT * FROM users
    WHERE username = $1`,
    [userName],
  );


User.create = (user) =>  db.one(
    `
    INSERT INTO users
    (username, first_name, last_name, email, password)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *`,
    [user.username, user.first_name, user.last_name, user.email, user.password],
  );


module.exports = User;

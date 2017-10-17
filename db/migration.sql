\c travel_op;

DROP TABLE IF EXISTS users;
-- DROP TABLE IF EXISTS categories CASCADE;
DROP TABLE IF EXISTS posts;


--USERS TABLE FOR AUTHENTIFICATION

CREATE TABLE IF NOT EXISTS users (
  id BIGSERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  email VARCHAR(255),
  password TEXT NOT NULL
);

--POST TABLE FOR USER TO CRUD

CREATE TABLE IF NOT EXISTS posts (
  id BIGSERIAL PRIMARY KEY,
  user_id INT REFERENCES users,
  -- category_id INT REFERENCES categories(id),
  country TEXT NOT NULL,
  description TEXT NOT NULL,
  image VARCHAR(255),
  date_uploaded TIMESTAMP NOT NULL DEFAULT NOW()
);



--ALBUM TABLE FOR USER TO

-- CREATE TABLE IF NOT EXISTS categories (
--   id BIGSERIAL PRIMARY KEY,
--   country VARCHAR(255)
-- );
-- CREATE INDEX ON categories (country);
-- CREATE INDEX ON posts (image);


// requiring needed files and dependencies
// setting up routes for the app
const express = require('express');
const postController = require('../controllers/postController');

const postRoutes = express.Router();

// routes and what they should render
postRoutes.get('/:id', postController.show); // get by id, to show one
postRoutes.put('/:id', postController.update); // get by id, to update one
postRoutes.delete('/:id', postController.destroy); // get by id, to delete one

postRoutes.get('/', postController.index); // show all
postRoutes.post('/', postController.create); // create one


module.exports = postRoutes;

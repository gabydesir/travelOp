// requiring needed files and dependencies
// setting up routes for the app
const express = require('express');
const postController = require('../controllers/postController');
const views = require('../controllers/viewController');

const postRoutes = express.Router();

// routes and what they should render
postRoutes.get('/:id/edit', postController.show, views.showEditForm); // get by id, to show one
postRoutes.get('/new', views.showAddForm); // get by id, to show one


postRoutes.get('/:id', postController.show, views.showOnePost); // get by id, to show one
postRoutes.put('/:id', postController.update, views.handleUpdate); // get by id, to update one
postRoutes.delete('/:id', postController.destroy, views.handleDelete); // get by id, to delete one

postRoutes.get('/', postController.index, views.showPosts); // show all
postRoutes.post('/', postController.create, views.handleCreate); // create one


module.exports = postRoutes;

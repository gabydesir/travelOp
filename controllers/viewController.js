module.exports = {

  // add post-route to 'post' to render
  showPosts(req, res) {
    res.render('post/post-index', {
      data: res.locals.posts,
    });
  },

  showOnePost(req, res) {
    res.render('post/post-single', {
      data: res.locals.post,
    });
  },

  showAddForm(req, res) {
    res.render('post/post-add');
  },

  showEditForm(req, res) {
    res.render('post/post-edit', {
      data: res.locals.post,
    });
  },

  handleCreate(req, res) {
    res.redirect('/post');
  },

  handleUpdate(req, res) {
    res.redirect(`/post/${req.params.id}`);
  },

  handleDelete(req, res) {
    res.redirect('/post');
  },

};

const bcrypt = require('bcryptjs');
const User = require('../models/user');
const userController = {};

userController.index = (req, res) => {
   res.json({
     user: req.user,
     data: 'Put a user profile on this route'
   });
}


userController.create = (req, res) => {
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(req.body.password, salt);
  User.create({
    username: req.body.username,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: hash
  })
    .then(user => {
    console.log(user,'<------user')
    req.login(user,(err)=>{
      if (err) return next(err);
      res.redirect('/auth/login')
      })
    })
    .catch(err => {
    console.log(err)
    res.status(500).json({error:err});
  })
}


module.exports = userController;

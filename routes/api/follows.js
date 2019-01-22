const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');
const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');

router.post('/follow/:followingId/:followerId', (req, res) => {
  Follow.findOne({follower: req.params.followerId, following: req.params.followingId}).then(follow => {
    if(follow){
      erros.handle = "That follow already exists";
      res.status(400).json(errors);
    } else {
      const newFollow = new Follow({
        follower: req.params.followerId,
        following: req.params.followingId
      });
      newFollow.save.then(follow => res.json(follow));
    }
  })
});

module.exports = router;

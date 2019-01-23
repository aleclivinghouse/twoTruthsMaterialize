const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');
const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');
const Follow = require('../../models/Follow');


router.post('/:followingId/:followerId', (req, res) => {
  Follow.findOne({follower: req.params.followerId, following: req.params.followingId}).then(follow => {
    if(follow){
      erros.handle = "That follow already exists";
      res.status(400).json(errors);
    } else {
      const newFollow = new Follow({
        follower: req.params.followerId,
        following: req.params.followingId
      });
      newFollow.save().then(follow => res.json(follow));
    }
  })
});


//get all of the people following a user
router.get('/followers/:id', (req, res) => {
  Follow.find({following: req.params.id})
  .populate('follower')
  .then(follow =>res.json(follow))
});
//get the people the user is following
router.get('/following/:id', (req, res)=> {
  Follow.find({follower: req.params.id})
  .populate('following')
  .then(follow => res.json(follow))
});

module.exports = router;

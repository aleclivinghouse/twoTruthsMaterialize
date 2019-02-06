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
      res.status(400).json({handle: "That follow already exists"});
    } else {
      const newFollow = new Follow({
        follower: req.params.followerId,
        following: req.params.followingId
      });
      console.log('this is newFollow');
      console.log(newFollow);
      newFollow.save()
     .then(follow => Follow.findOne({_id:follow._id}).populate('follower'))
     .then(follow => res.json(follow));
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

router.delete('/following/:id', (req, res)=> {

})

module.exports = router;

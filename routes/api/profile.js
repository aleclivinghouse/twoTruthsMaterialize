const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const validateProfileInput = require('../../validation/profile');
const validateExperienceInput = require('../../validation/experience');
const validateEducationInput = require('../../validation/experience');

const Profile = require('../../models/Profile');
const User = require('../../models/User');

router.get('/', passport.authenticate('jwt', {session: false}), () =>{
  const errors = {};
  Profile.findOne({ user: req.user.id })
    .populate('user', ['name', 'avatar'])
    .then(profile=>{
      if(!profile){
        errors.noprofile = "There is no profile for this user";
        return res.status(404).json();
      }
      res.json(profile);
    })
    .catch(err => res.status(404).json(err));
});

router.post('/', passport.authenticate('jwt', {session: false}), (req, res) =>{
  const {errors, isValid} = validateProfileInput(req.body);
  //check validation
  if(!isValid){
    return res.status(400).json(errors);
  }
  const profileFields = {};
  console.log('below are the skills');
  console.log(req.body.skills);
  profileFields.user = req.user.id;
  if (req.body.handle) profileFields.handle = req.body.handle;
  if (req.body.bio) profileFields.bio = req.body.bio;
  if(typeof req.body.skills !== 'undefined'){
    profileFields.skills = req.body.skills.split(',');
    console.log('here are the skills after they are split');
    console.log(req.body.skills);
  }

 Profile.findOne({user: req.user.id}).then(profile => {
    if(profile){
    //Update
    Profile.findOneAndUpdate(
      { user: req.user.id},
      {$set: profileFields},
      {new: true}
    )
    .then(profile => res.json(profile));
  } else {
    //create
    Profile.findOne({ handle: profileFields.handle}).then(profile => {
      if(profile){
        errors.handle = 'That handle already exists';
        res.status(400).json(errors);
      }
    //save
    new Profile(profileFields).save().then(profile => res.json(profile));
    });
  }
  });
});

router.get('/all', (req, res) => {
  Profile.find()
  .populate('user', ['name', 'avatar'])
  .then(profiles => {
    if(!profiles){
      errors.noprofile = 'There are no profiles';
      return res.status(404).json();
    }
    res.json(profiles);
  }).catch(err => res.status(404).json({profile: 'There is no profiles made'}));
})

router.get('/handle/:handle', (req, res) => {
  const errors = {};
  Profile.findOne({handle: req.params.handle })
    .populate('user', ['name'])
    .then(profile => {
      if(!profile){
        errors.noprofile = 'There is no profile for this user';
        res.status(404).json(errors);
      }
      res.json(profile);
    }).catch(err => res.status(404).json({profile: 'There is no profile for this user'}));
});


router.get('/user/:user_id', (req, res) => {
  const errors = {};
  Profile.findOne({user: req.params.user_id })
    .populate('user', ['name', 'avatar'])
    .then(profile => {
      if(!profile){
        errors.noprofile = 'There is no profile for this user';
        res.status(404).json(errors);
      }
      res.json(profile);
    }).catch(err => res.status(404).json(err));
});


router.post('/experience', passport.authenticate('jwt', { session: false }), (req, res) => {
  const {errors, isValid} = validateExperienceInput(req.body);
  if(!isValid){
    return res.status(400).json(errors);
  }
  Profile.findOne({user: req.user.id})
    .then(profile => {
      const newExp = {
        title: req.body.title,
        company: req.body.company,
        location: req.body.location,
        from: req.body.from,
        to: req.body.to,
        current: req.body.current,
        description: req.body.description
      }

      //Add to experience Array
      profile.experience.unshift(newExp);
      profile.save().then(profile => res.json(profile));
    })
});

router.post('/education', passport.authenticate('jwt', { session: false }), (req, res) => {
  const {errors, isValid} = validateEducationInput(req.body);
  if(!isValid){
    return res.status(400).json(errors);
  }
  Profile.findOne({user: req.user.id})
    .then(profile => {
      const newEdu = {
        school: req.body.school,
       degree: req.body.degree,
       fieldofstudy: req.body.fieldofstudy,
       from: req.body.from,
       to: req.body.to,
       current: req.body.current,
       description: req.body.description
      }

      //Add to experience Array
      profile.experience.unshift(newEdu);
      profile.save().then(profile => res.json(profile));
    })
});

router.delete(  '/', passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Profile.findOneAndRemove({ user: req.user.id }).then(() => {
      User.findOneAndRemove({ _id: req.user.id }).then(() =>
        res.json({ success: true })
      );
    });
  }
);


//stuff here
module.exports = router;

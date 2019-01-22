const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FollowSchema = new Schema({
  follower: {type: mongoose.Schema.ObjectId, ref: 'User'},
  following: {type: mongoose.Schema.ObjectId, ref: 'User'}
})

module.exports = Follow = mongoose.model('follows', FollowSchema)

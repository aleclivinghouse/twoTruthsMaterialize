const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FollowSchema = new Schema({
  follower: {type: mongoose.Schema.ObjectId, ref: 'users'},
  following: {type: mongoose.Schema.ObjectId, ref: 'users'}
});

module.exports = Follow = mongoose.model('follows', FollowSchema);

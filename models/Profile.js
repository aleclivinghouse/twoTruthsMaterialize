const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  skills: {
    type: [String],
    required: true
  },
  handle: {
    type: String,
    required: true
  },
  bio: {
    type: String
  }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);

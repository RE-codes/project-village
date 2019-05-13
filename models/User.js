const mongoose = require('mongoose');

const { Schema } = mongoose;

// User Schema

const UserSchema = new Schema({
  name: String,
  email: String,
  password: String,
  createdDate: {
    type: Date,
    default: Date.now
  }
});

// Create model

const User = mongoose.model('users', UserSchema);

module.exports = User;

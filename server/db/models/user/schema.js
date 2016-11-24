const mongoose = require('mongoose')

module.exports = new mongoose.Schema({
  username: {
    type: String,
    lowercase: String,
    unique: true,
  },
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  admin: Boolean,
  isNewUser: {
    type: Boolean,
    default: true,
    required: true,
  },
  // time stamps
  createdAt: Date,
  updatedAt: Date,
  // login attempts & lock 
  loginAttempts: {
    type: Number,
    required: true,
    default: 0
  },
  lockUntil: Number,
})

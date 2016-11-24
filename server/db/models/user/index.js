const mongoose = require('mongoose')

const userSchema = require('./schema')
const { loginAttempts, isLocked, loginStats } = require('./loginAttempts')
const { comparePassword, hashPassword } = require('./password')
const timeStamp = require('./timeStamp')

// handle multiple login attacks
userSchema.statics.failedLogin = loginStats
userSchema.methods.incLoginAttempts = loginAttempts
userSchema.virtual('isLocked').get(isLocked(this))

// pre-save hook
userSchema.pre('save', function (next) {
  let user = this
  // timeStamp user (createdAt, updatedAt)
  user = timeStamp(user)
  // hash passwords before saving them to the db
  hashPassword(user, next)
})

// compare passwords in db using hashing algorithm
userSchema.methods.comparePassword = comparePassword

module.exports = mongoose.model('User', userSchema)

const mongoose = require('mongoose')

const userSchema = require('./schema')
const { loginAttempts, isLocked, loginStats } = require('./utils/loginAttempts')
const { comparePassword, hashPassword } = require('./utils/password')
const timeStamp = require('./utils/timeStamp')
const getAuthenticated = require('./utils/authenticate')
const validateUser = require('./utils/validateUser')
const { signJwt, verifyJwt } = require('./utils/jwt')

// pre-save hook
userSchema.pre('save', function (next) {
  let user = this
  // timeStamp user (createdAt, updatedAt)
  user = timeStamp(user)
  // hash passwords before saving them to the db
  hashPassword(user, next)
})

// compare passwords in db using hashing algorithm
userSchema.statics.getAuthenticated = getAuthenticated
userSchema.methods.comparePassword = comparePassword
userSchema.methods.preValidate = validateUser

// JWT
userSchema.methods.signJwt = signJwt
userSchema.methods.verifyJwt = verifyJwt

// handle multiple login attacks
userSchema.statics.failedLogin = loginStats
userSchema.methods.incLoginAttempts = loginAttempts
userSchema.virtual('isLocked').get(isLocked(this))

module.exports = mongoose.model('User', userSchema)

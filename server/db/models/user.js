const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
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
  createdAt: Date,
  updatedAt: Date,
})


userSchema.pre('save', function (next) {
  const user = this

  // update time stamps
  const now = new Date()
  user.updatedAt = now
  if (!user.createdAt) {
    user.createdAt = now
  }

  // hash passwords before saving them to the db
  if (user.isModified('password') || user.isNew) {
    bcrypt.genSalt(10, (err, salt) => {
      if (err) return next(err)
      bcrypt.hash(user.password, salt, (err, hash) => {
        if (err) return next(err)
        user.password = hash
        next()
      })
    })
  } else {
    return next()
  }
})

// compare passwords in db using hashing algorithm
userSchema.methods.comparePassword = function (pw, cb) {
  bcrypt.compare(pw, this.password, (err, isMatch) => {
    if (err) return cb(err)
    cb(null, isMatch)
  })
}

const User = mongoose.model('User', userSchema)

module.exports = User

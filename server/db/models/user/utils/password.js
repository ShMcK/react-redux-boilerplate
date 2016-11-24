const bcrypt = require('bcrypt')
const SALT_WORK_FACTOR = 10

exports.comparePassword = function comparePassword(pw, cb) {
  bcrypt.compare(pw, this.password, (err, isMatch) => {
    if (err) return cb(err)
    cb(null, isMatch)
  })
}

exports.hashPassword = function hasPassword(user, next) {
  if (user.isModified('password') || user.isNew) {
    bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
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
}
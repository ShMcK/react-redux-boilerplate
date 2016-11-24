const MAX_LOGIN_ATTEMPTS = 5
const LOCK_TIME = 7200000 // 2 hours

exports.loginStats = {
  NOT_FOUND: 0,
  PASSWORD_INCORRECT: 1,
  MAX_ATTEMPTS: 3
}

exports.loginAttempts = function loginAttempts(cb) {
  const user = this
  // restart login attempt counters
  if (user.lockUntil && user.lockUntil < Date.now()) {
    return user.update({
      $set: { loginAttempts: 1 },
      $unset: { lockUntil: 1 }
    }, cb)
  }
  // inc attempts
  const updates = { $inc: { loginAttempts: 1 } }
  // lock the account if reaches max attempts
  if (user.loginAttempts + 1 >= MAX_LOGIN_ATTEMPTS && !user.isLocked) {
    updates.$set = { lockUntil: Date.now() + LOCK_TIME }
  }
  return user.update(updates, cb)
}

exports.isLocked = function isLocked(user) {
  return !!(user.lockUntil && user.lockUntil > Date.now())
}
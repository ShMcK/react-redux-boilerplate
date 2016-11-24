const reasons = require('./loginAttempts').loginStats

module.exports = function(username, password, cb) {
    this.findOne({ username: username }, function(err, user) {
        if (err) return cb(err)

        // make sure the user exists
        if (!user) {
            return cb(null, null, reasons.NOT_FOUND)
        } 

        // check if the account is currently locked
        if (user.isLocked) {
            // just increment login attempts if account is already locked
            return user.incLoginAttempts(function(err) {
                if (err) return cb(err)
                return cb(null, null, reasons.MAX_ATTEMPTS)
            })
        }

        // test for a matching password
        user.comparePassword(password, function(err, isMatch) {
            if (err) return cb(err)

            // check if the password was a match
            if (isMatch) {
                // if there's no lock or failed attempts, just return the user
                if (!user.loginAttempts && !user.lockUntil) return cb(null, user)
                // reset attempts and lock info
                var updates = {
                    $set: { loginAttempts: 0 },
                    $unset: { lockUntil: 1 }
                }
                return user.update(updates, function(err) {
                    if (err) return cb(err)
                    return cb(null, user)
                })
            }

            // password is incorrect, so increment login attempts before responding
            user.incLoginAttempts(function(err) {
                if (err) return cb(err)
                return cb(null, null, reasons.PASSWORD_INCORRECT)
            })
        })
    })
}
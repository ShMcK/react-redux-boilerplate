const jwt = require('jsonwebtoken')
const { SECRET } = require('../../config')

module.exports = function getJwt(user) {
  return jwt.sign(user, SECRET, {
    expiresInMinutes: 1440 // 24 hours
  })
}

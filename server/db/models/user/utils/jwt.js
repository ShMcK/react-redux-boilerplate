const jwt = require('jsonwebtoken')
const { SECRET } = require('../../../../config')

exports.signJwt = function signJwt(user) {
  return jwt.sign(user, SECRET, {
    expiresIn: '1 day'
  })
}

exports.verifyJwt = function verifyJwt(token) {
  // TODO: verify JWT
}

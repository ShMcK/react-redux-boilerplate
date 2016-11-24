const User = require('../../db/models/user')
const validateUser = require('../utils/validateUser')

module.exports = function register(req, res) {
  const { username, email, password } = req.body

  // validate user 
  const isValid = validateUser({ username, email, password })
  if (typeof isValid === 'string') {
    return res.status(403).json({ error: isValid })
  }

  User.findOne({ email }, (err, user) => {

    // handle db error
    if (err) return res.status(500).json({ error: 'There was a problem' })
    // handle if user already exists
    else if (user) {
      return res.status(403).json({ error: 'User already exists' })
      // create new user
    } else {

      // TODO: encrypt password before adding user

      User.create({ username, email, password }, (err, user) => {
        if (err) return res.sendStatus(500).json({ error: 'There was a problem' })

        delete user['password']

        res.status(200).json({
          user
        })
      })
    }
  })
}

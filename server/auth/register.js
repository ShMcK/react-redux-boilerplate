const User = require('../db/models/user')

module.exports = function register(req, res) {
  const { username, email, password } = req.body

  // TODO: validate

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
        res.status(200).json('user added')
      })
    }
  })
}

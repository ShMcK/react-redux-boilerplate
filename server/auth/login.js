const User = require('../db/models/user')

module.exports = function login(req, res) {
  const { email } = req.body
  
  // TODO: user password match

  User.findOne({ email }, (err, user) => {

    // handle db error
    if (err) return res.status(500).json({ error: 'There was a problem' })
    // handle user not found
    else if (!user) {
      res.status(403).json({ error: 'User not found' })
      // log user in
    } else {

      // TODO: handle JWT

      res.status(200).json(user)
    }
  })
}

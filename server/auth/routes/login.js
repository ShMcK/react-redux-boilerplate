const User = require('../../db/models/user')

module.exports = function login(req, res) {
  const { email } = req.body

  User.findOne({ email }, (err, user) => {

    // handle db error
    if (err) return res.status(500).json({ error: 'There was a problem' })
    // handle user not found
    else if (!user) {
      res.status(403).json({ error: 'User not found' })
      // log user in
    } else {
      user.comparePassword(req.body.password, (err, isMatch) => {
        console.log(isMatch)
        if (err) res.status(403).json({ error: 'There was a problem' })
        if (!isMatch) res.status(403).json({ error: 'Wrong password' })

        // authenticate with JWT
        const token = user.signJwt()

        res.status(200).json({
          user: { email, username: user.username },
          token
        })
      })
    }
  })
}

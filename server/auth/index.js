const bodyParser = require('body-parser')
const router = require('express').Router({
  mergeParams: true
})
const User = require('../db/models/user')

module.exports = function authRoutes() {

  // Body parser for handling requests
  router.use(bodyParser.urlencoded({ extended: false }))
  router.use(bodyParser.json())

  // Login routes
  router.route('/login')
    .post((req, res) => {

      // TODO: user password match

      const { email } = req.body
      console.log(email)
      User.findOne({ email }, (err, user) => {

        console.log(user)

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
    })

  // Register routes
  router.route('/register')
    .post((req, res) => {
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
    })

  return router
}
const bodyParser = require('body-parser')
const router = require('express').Router({
  mergeParams: true
})

const User = require('../db/models/user')

module.exports = function apiRoutes() {

  // Body parser for handling requests
  router.use(bodyParser.urlencoded({ extended: false }))
  router.use(bodyParser.json())

  router.route('/users')
    .get((req, res) => {

      // load all users from db
      User.find({}, (err, users) => {
        if (err) return res.sendStatus(500).send({ error: err })
        res.status(200).json(users)  
      })

    })
  return router
}

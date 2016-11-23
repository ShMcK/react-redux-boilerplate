const User = require('../db/models/user')

const router = require('express').Router({
  mergeParams: true
})

module.exports = function apiRoutes() {
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

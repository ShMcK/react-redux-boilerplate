const bodyParser = require('body-parser')
const router = require('express').Router({
  mergeParams: true
})
const login = require('./login')
const register = require('./register')

module.exports = function authRoutes() {

  // Body parser for handling requests
  router.use(bodyParser.urlencoded({ extended: false }))
  router.use(bodyParser.json())

  // Login routes
  router.route('/login')
    .post(login)

  // Register routes
  router.route('/register')
    .post(register)

  return router
}
const router = require('express').Router({
  mergeParams: true
})

module.exports = function authRoutes() {
  const api = router.route('/auth')
  
  return router
}
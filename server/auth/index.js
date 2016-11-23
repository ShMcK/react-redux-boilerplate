const router = require('express').Router({
  mergeParams: true
})

module.exports = function authRoutes() {
  const auth = router.route('/auth')
  
  return router
}
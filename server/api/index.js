const router = require('express').Router({
  mergeParams: true
})

module.exports = function apiRoutes() {
  const api = router.route('/api')

  return router
}
const express = require('express')
const { join } = require('path')
const app = express()
const apiRoutes = require('./api')
const authRoutes = require('./auth')
const port = 8080

// Load static assets from public directory
app.use(express.static(join(__dirname, 'public')))

// Routes
app.use(apiRoutes())
app.use(authRoutes())

// 404: Page not found
app.use((req, res, next) => {
  res.status(404).send('Page not found...')
  next()
})

// Run server process
app.listen(port, () => {
  console.log('Express server running on port', port)
})

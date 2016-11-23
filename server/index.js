const express = require('express')
const { join } = require('path')
const app = express()
const bodyParser = require('body-parser')
const connectDb = require('./db')
const apiRoutes = require('./api')
const authRoutes = require('./auth')
const port = 8080

// Connect to MongoDB
connectDb()

// Body parser for handling requests
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Load static assets from public directory
app.use(express.static(join(__dirname, 'public')))

// Routes
app.use('/api', apiRoutes())
app.use('/auth', authRoutes())

// 404: Page not found
app.use((req, res, next) => {
  res.status(404).send('Page not found...')
  next()
})

// Run server process
app.listen(port, () => {
  console.log('Express server running on port', port)
})

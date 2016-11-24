const express = require('express')
const { join } = require('path')
const app = express()
const connectDb = require('./db')
const apiRoutes = require('./api')
const authRoutes = require('./auth')
const morgan = require('morgan')
const port = 8080

// Connect to MongoDB
connectDb()

// Load static assets from public directory
app.use(express.static(join(__dirname, 'public')))

app.use(morgan('dev'))

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

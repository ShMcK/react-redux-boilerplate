const express = require('express')
const app = express()
const apiRouter = require('./api')
const port = 8080

app.use(apiRouter())

app.use((req, res, next) => {
  res.status(404).send('Page not found...')
  next()
})

app.listen(port, () => {
  console.log('Express server running on port', port)
})

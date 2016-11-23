const mongoose = require('mongoose')
const loadFakeUsers = require('./init/loadUsers')
const User = require('./models/user')

// TODO: move to ENV var
const MONGO_URL = 'mongodb://localhost:27017/express'

module.exports = function connectDb() {

  mongoose.connect(MONGO_URL, (err) => {
    if (err) console.log('Error connecting', err)

    User.count({}, (err, count) => {
      if (err) console.log(err)

      // load fake 
      if (!count) {
        loadFakeUsers()
      }
    })


    console.log('connected to mongodb')
  })
}


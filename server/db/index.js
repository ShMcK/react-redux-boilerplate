const mongoose = require('mongoose')
const loadFakeUsers = require('./init/loadUsers')
const { DB_URL } = require('../config')
const User = require('./models/user')

module.exports = function connectDb() {

  mongoose.connect(DB_URL, (err) => {
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


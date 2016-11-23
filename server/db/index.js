const mongoClient = require('mongodb').MongoClient
const mongoose = require('mongoose')

// TODO: move to ENV var
const MONGO_URL = 'mongodb://localhost:27017/express' 

module.exports = function connectDb() { 
  mongoose.connect(MONGO_URL, () => {
    console.log('connected to mongodb')
  })
}


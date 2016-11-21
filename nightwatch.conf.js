require('babel-core/register')

process.env.NODE_ENV = 'development'

module.exports = require('./e2e/nightwatch.json')

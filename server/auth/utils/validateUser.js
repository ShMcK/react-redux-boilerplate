const User = require('../../db/models/user')

const validEmailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

module.exports = function validateUser(user) {
  const { email, username, password } = user
  
  // email
  if (!email) {
    return 'Email is required.'
  } else if (!email.match(validEmailRegex)) {
    return 'Not a valid email.'
  }

  // password
  if (!password) {
    return 'Password is required.'
  } else if (password.length < 6) {
    return 'Password must be at least 6 characters.'
  } else if (password.length > 24) {
    return 'Password cannot be longer than 24 characters.'
  }

  // username
  if (!username) {
    return 'Username is required.'
  } else if (username.length < 4) {
    return 'Username must be at least 4 characters.'
  } else if (username.length > 16) {
    return 'Username cannot be longer than 16 characters.'
  } else if (User.find({ username }).count() > 1) {
    return 'Username already exists. Try a different name.'
  }

  return user
}
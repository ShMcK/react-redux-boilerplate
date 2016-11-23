const User = require('../models/user')

const example = [{
  name: 'Shawn',
  password: '12345',
  admin: false,
}, {
  name: 'Mack',
  password: '12345',
  admin: false,
}]

module.exports = function loadFakeUsers() {
  
  for(let i = 0; i < 2; i++) {
    User.create(example[i], (err, user) => {
      if (err) console.log(err)
      else console.log(user)
    })
  }

}
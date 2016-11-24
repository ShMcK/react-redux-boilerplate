const User = require('../models/user')

const example = [{
  username: 'Shawn',
  email: 'Shawn@email.com',
  password: '12345',
  admin: false,
}, {
  username: 'Mack',
  email: 'Mack@email.com',
  password: '12345',
  admin: false,
}]

module.exports = function loadFakeUsers() {
  
  for(let i = 0; i < 2; i++) {

    // add a fake user to the db
    User.create(example[i], (err, user) => {
      if (err) console.log(err)
      else console.log(user)
    })

  }

}
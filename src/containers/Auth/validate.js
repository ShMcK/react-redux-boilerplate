export const email = {
  rules: [{
    type: 'email', message: 'The input is not valid E-mail!',
  }, {
    required: true, message: 'Please input your E-mail!',
  }],
}

export const password = {
  rules: [{
    required: true, message: 'Please input your password!',
  }],
}

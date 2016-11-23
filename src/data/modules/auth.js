import { USER_LOGIN } from '../actions'

export const authLogin = (authObject) => dispatch =>
  fetch('/login', {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify(authObject)
  })
  .then((jwt) => {
    dispatch(({
      type: USER_LOGIN,
    })
  

import React from 'react'
import Main from '../../layout/Main'
import { Link } from 'react-router'
import LoginForm from './Login'
import './auth.css'

const Auth = () => (
  <Main>
    <Link to='/'>Back</Link>
    <LoginForm />
  </Main>
)

export default Auth

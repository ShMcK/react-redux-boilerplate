import React from 'react'
import './noMatch.css'

const NoMatch = ({ location }) => (
  <section className='noMatch'>
    <h2>Sorry!</h2>
    <p>path <strong>{location.pathname}</strong> doesn't exist</p>
  </section>
)

export default NoMatch

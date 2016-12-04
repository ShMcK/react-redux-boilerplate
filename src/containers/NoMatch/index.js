import React from 'react'

const NoMatch = ({ location }) => (
  <div>
    <h2>Sorry!</h2>
    <p>{location.pathname} doesn't exist</p>
  </div>
)

export default NoMatch

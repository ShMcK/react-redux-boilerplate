import React, { PropTypes } from 'react'

const Greet = ({ greeting }) => (
  <div>{greeting}, World!</div>
)

Greet.propTypes = {
  greeting: PropTypes.string.isRequired,
}

export default Greet

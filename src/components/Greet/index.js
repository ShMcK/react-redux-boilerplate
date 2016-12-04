import React, { PropTypes } from 'react'
import './Greet.css'

const Greet = ({ greeting }) => (
  <div>{greeting}, World!</div>
)

Greet.propTypes = {
  greeting: PropTypes.string.isRequired,
}

export default Greet

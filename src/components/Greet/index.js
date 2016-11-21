import React, { Component, PropTypes } from 'react'
import './Greet.css'

class Greet extends Component {
  static propTypes = {
    greeting: PropTypes.string.isRequired,
  }
  render() {
    return (
      <div>{this.props.greeting}, World!</div>
    )
  }
}

export default Greet

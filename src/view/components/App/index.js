import React, { Component, PropTypes } from 'react'
import './App.css'

class App extends Component {
  static propTypes = {
    greeting: PropTypes.string.isRequired,
  }
  render() {
    return (
      <div>{this.props.greeting}, World!</div>
    )
  }
}

export default App

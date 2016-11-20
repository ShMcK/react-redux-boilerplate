import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './components'

const render = () => {
  ReactDOM.render(
    <App greeting="Hello" />,
    document.getElementById('root')
  )
}

export default render

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { App } from './components'

const render = (store) => {
  ReactDOM.render(
    <Provider store={store}>
      <App greeting="Hello" />
    </Provider>,
    document.getElementById('root')
  )
}

export default render

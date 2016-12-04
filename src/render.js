import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Router from './containers/router'

// TODO: remove in favor of babel import later
import 'antd/dist/antd.css'

const render = (store) => {
    ReactDOM.render(
        <Provider store={store}>
            <Router />
        </Provider>,
        document.getElementById('root')
    )
}

export default render

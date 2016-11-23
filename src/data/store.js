// @flow
import { createStore, applyMiddleware } from 'redux'
import type { Store } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers'

const initialState = {}

const middlewareList = [
  thunkMiddleware,
]

let enhancer

// development mode
if (process.env && process.env.NODE_ENV !== 'production') {
  const { composeWithDevTools } = require('redux-devtools-extension')
  enhancer = composeWithDevTools(
    applyMiddleware(...middlewareList)
  )
// production mode
} else {
  enhancer = applyMiddleware(...middlewareList)
}

const store: Store<{}, {}> = createStore(rootReducer, initialState, enhancer)

// Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
if (module.hot) {
  module.hot.accept('./reducers', () =>
    store.replaceReducer(require('./reducers') /*.default if you use Babel 6+ */)
  )
}

export default store

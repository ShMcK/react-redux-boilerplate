import { combineReducers } from 'redux'

const example = (state = 1, action) => {
  switch (action.type) {

    // case

    default:
      return state
  }
}

const rootReducer = combineReducers({
  example,
})

export default rootReducer
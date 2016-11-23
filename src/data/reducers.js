import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import { default as votes } from './modules/votes'

const rootReducer = combineReducers({
  votes,
  form,
})

export default rootReducer
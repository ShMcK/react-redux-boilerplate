import { combineReducers } from 'redux'
import { default as votes } from './modules/votes'

const rootReducer = combineReducers({
  votes,
})

export default rootReducer
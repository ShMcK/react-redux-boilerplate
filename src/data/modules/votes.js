/**
 * Votes example
 */
import { VOTE_UP } from '../actions'

export const voteUp = () => ({
  type: VOTE_UP
})

const reducer = (state = 0, action) => {
  switch (action.type) {

    case VOTE_UP:
      return state + 1

    default:
      return state
  }
}

export default reducer
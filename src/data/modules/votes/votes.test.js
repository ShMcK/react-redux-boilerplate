import reducer, { voteUp } from './index'
import { VOTE_UP } from '../../actions'

describe('votes', () => {
  
  // Action Creators

  it('should create an action for VOTE_UP', () => {
    expect(voteUp()).toEqual({ type: VOTE_UP })
  })

  // Reducer
  
  it('VOTE_UP should trigger an additional vote', () => {
    const action = { type: VOTE_UP }
    const initial = 0
    const result = reducer(initial, action)
    const expected = 1
    expect(result).toBe(expected)
  })

})
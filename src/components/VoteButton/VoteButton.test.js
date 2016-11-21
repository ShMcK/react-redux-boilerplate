import React from 'react'
import VoteButton from './index'
import { shallow } from 'enzyme'

export const tests = describe('VoteButton', () => {

  it('should contain the number of votes', () => {
    const output = shallow(<VoteButton votes={1} voteUp={() => {}}/>)
    expect(output.text()).toContain('1')
  })

})

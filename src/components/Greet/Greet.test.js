import React from 'react'
import Greet from './index'
import { shallow } from 'enzyme'

export const tests = describe('Greet', () => {

  it('should have the text "Hello, World!', () => {
    const output = shallow(<Greet greeting="Hello" />)
    expect(output.text()).toContain('Hello, World!')
  })

})

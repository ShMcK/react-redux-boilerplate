import React from 'react'
import App from './index'
import { shallow } from 'enzyme'

export const tests = describe('App', () => {

  it('should have the text "Hello, World!', () => {
    const output = shallow(<App greeting="Hello" />)
    expect(output.text()).toContain('Hello, World!')
  })

})

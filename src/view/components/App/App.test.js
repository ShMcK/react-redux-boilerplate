import React from 'react'
import ReactDOM from 'react-dom'
import App from './index'
import { mount } from 'enzyme'

export const tests = describe('App', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App greeting="hi" />, div)
  })

  it('Should have the Hello World label', () => {
    const output = mount(<App greeting="Hello" />)
    expect(output.text()).toContain('World!')
  })

})

import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { host } from 'storybook-host'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, text } from '@kadira/storybook-addon-knobs'
import { specs, describe, it } from 'storybook-addon-specifications'
import { mount } from "enzyme"
import expect from 'expect'

import App from './index'

storiesOf('App', module)
  .addDecorator(withKnobs)
  .addDecorator(host({
    title: 'An example component',
    align: 'center center',
    height: '80%',
    width: 400,
  }))
  .add('with greeting', () => {
    const greeting = text('Greeting', 'Hello')

    const story =
      <WithNotes notes={'Add notes here. Just an example.'}>
        <App greeting={greeting} />
      </WithNotes>

      specs(() => describe('Hello World', () => {
        it('Should have the Hello World label', () => {
        const output = mount(story)
        expect(output.text()).toContain('World!')
      })
    }))

    return story
  })

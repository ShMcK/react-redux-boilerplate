import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { host } from 'storybook-host'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, text } from '@kadira/storybook-addon-knobs'
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
    return (
      <WithNotes notes={'A basic app example.'}>
        <App greeting={greeting} />
      </WithNotes>
    )
  })

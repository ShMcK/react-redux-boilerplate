import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { host } from 'storybook-host'
import { withKnobs, text } from '@kadira/storybook-addon-knobs'
import withReadme from 'storybook-readme/with-readme'
import readme from './App.md'
// import { specs } from 'storybook-addon-specifications'

import App from './index'

storiesOf('App', module)
  .addDecorator(withKnobs)
  .addDecorator(host({
    title: 'An example component',
    align: 'center center',
    height: '80%',
    width: 400,
  }))
  .add('Default', withReadme([readme], () => {
    const greeting = text('Greeting', 'Hello')

    const story = <App greeting={greeting} />

      // specs(() => require('./App.test').tests)

    return story
  }))

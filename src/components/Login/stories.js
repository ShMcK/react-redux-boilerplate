import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { withKnobs, text } from '@kadira/storybook-addon-knobs'
import withReadme from 'storybook-readme/with-readme'
// import { specs } from 'storybook-addon-specifications'

import readme from './Login.md'
import Login from './index'

storiesOf('Login', module)
  .addDecorator(withKnobs)
  .add('Default', withReadme([readme], () => {
    const userName = text('UserName', 'someUser')
    const password = text('Password', 'password')

    const story = <Login />

    // specs(() => tests)

    return story
  }))

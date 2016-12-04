import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { host } from 'storybook-host'
import center from '../../../.storybook/decorators/center'
import Login from './Login'


storiesOf('Login', module)
  .addDecorator(host(center))
  .add('Default', () => {
    const story = <Login />
    return story
  })

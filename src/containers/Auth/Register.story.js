import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { host } from 'storybook-host'
import center from '../../../.storybook/decorators/center'
import Register from './Register'


storiesOf('Register', module)
  .addDecorator(host(center))
  .add('Default', () => {
    const story = <Register />
    return story
  })

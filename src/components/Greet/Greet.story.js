import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { host } from 'storybook-host'
import { withKnobs, text } from '@kadira/storybook-addon-knobs'
import withReadme from 'storybook-readme/with-readme'
import { specs } from 'storybook-addon-specifications'
import center from '../../../.storybook/decorators/center'

import readme from './Greet.md'
import { tests } from './Greet.test'
import Greet from './index'

storiesOf('Greet', module)
  .addDecorator(withKnobs)
  .addDecorator(host(center))
  .add('Default', withReadme([readme], () => {
    const greeting = text('Greeting', 'Hello')

    const story = <Greet greeting={greeting} />

    specs(() => tests)

    return story
  }))

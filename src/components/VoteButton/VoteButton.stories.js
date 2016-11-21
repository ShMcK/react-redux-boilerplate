import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { host } from 'storybook-host'
import { withKnobs, text } from '@kadira/storybook-addon-knobs'
import withReadme from 'storybook-readme/with-readme'
import { specs } from 'storybook-addon-specifications'

import readme from './VoteButton.md'
import { tests } from './VoteButton.test'
import VoteButton from './index'

storiesOf('VoteButton', module)
  .addDecorator(withKnobs)
  .addDecorator(host({
    title: 'An example component',
    align: 'center center',
    height: '80%',
    width: 400,
  }))
  .add('Default', withReadme([readme], () => {
    // knobs
    const votes = text('Votes', 0)
    // actions
    const actions = {
      voteUp: action('voteUp')
    }
    // tests
    specs(() => tests)

    return <VoteButton votes={votes} voteUp={actions.voteUp} />
  }))

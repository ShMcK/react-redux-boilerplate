import { configure } from '@kadira/storybook'
import './test'

const req = require.context('../src', true, /story.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module)

import { configure } from '@kadira/storybook'
import './test'

const req = require.context('../src/view/components', true, /.stories.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module)

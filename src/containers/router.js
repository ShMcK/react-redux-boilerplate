import React from 'react'
import BrowserRouter from 'react-router/BrowserRouter'
import Match from 'react-router/Match'
import Miss from 'react-router/Miss'

import Home from './Home'
import Auth from './Auth'
import NoMatch from './NoMatch'

const Router = () => (
  <BrowserRouter>
    <section>
      <Match exactly pattern='/' component={Home} />
      <Match pattern='/login' component={Auth} />
      <Miss component={NoMatch} />
    </section>
  </BrowserRouter>
)

export default Router

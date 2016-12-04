import React from 'react'
import { connect } from 'react-redux'
import Home from '../../components/Home'
import { voteUp } from '../../data/modules/votes'

const App = (props) => (
  <Home {...props} />
)

const mapStateToProps = state => ({
  votes: state.votes,
})

const mapDispatchToProps = ({
  voteUp
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

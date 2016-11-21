import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Greet, VoteButton } from '../../components'
import { voteUp } from '../../data/modules/votes'

class App extends Component {
  static contextTypes = {
    store: PropTypes.object.isRequired,
  }

  render() {
    const { votes, voteUp } = this.props
    return (
      <div>
        <Greet greeting='Hello' />
        <br />
        <VoteButton votes={votes} voteUp={voteUp}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  votes: state.votes,
})

const mapDispatchToProps = ({
  voteUp
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

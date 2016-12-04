import React from 'react'
import { connect } from 'react-redux'

import NavBar from '../../layout/NavBar'
import Main from '../..//layout/Main'
import Greet from '../../components/Greet'
import VoteButton from '../../components/VoteButton'

import { voteUp } from '../../data/modules/votes'

const Home = (props) => (
  <div>
    <NavBar />
    <Main>
      <Greet greeting='Hello' />
      <br />
      <VoteButton {...props} />
    </Main>
  </div>
)

const mapStateToProps = state => ({
  votes: state.votes,
})

const mapDispatchToProps = ({
  voteUp
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)

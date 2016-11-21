import React, { Component, PropTypes } from 'react'

class VoteButton extends Component {
  static propTypes = {
    votes: PropTypes.number.isRequired,
    voteUp: PropTypes.func.isRequired,
  }
  render() {
    const { votes, voteUp } = this.props
    return (
      <button onClick={voteUp}>{votes || 0}</button>
    )
  }
}

export default VoteButton

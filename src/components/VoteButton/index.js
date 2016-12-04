import React, { PropTypes } from 'react'

const VoteButton = ({ votes, voteUp }) => (
  <button onClick={voteUp}>{votes || 0}</button>
)

VoteButton.propTypes = {
  votes: PropTypes.number.isRequired,
  voteUp: PropTypes.func.isRequired,
}

export default VoteButton

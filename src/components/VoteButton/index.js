import React, { PropTypes } from 'react'
import { Button } from 'antd'

const VoteButton = ({ votes, voteUp }) => (
  <Button onClick={voteUp}>{votes || 0}</Button>
)

VoteButton.propTypes = {
  votes: PropTypes.number.isRequired,
  voteUp: PropTypes.func.isRequired,
}

export default VoteButton

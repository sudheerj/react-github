import React from 'react';
import FollowingItem from './FollowingItem';
import {getFollowing} from '../services/github-api'
import PropTypes from 'prop-types'

export default class Following extends React.Component  {
  constructor() {
    super()
    this.state = {following: []}
  }

  getFollowing() {
    const {username} = this.props
    this.props.getFollowing(username).then(following => {
      this.setState({following});
    });
  }

  componentWillMount() {
    this.getFollowing();
  }

  render() {
    const {following} = this.state
    return (
      <ul className="list-unstyled">
        {renderFollowing(following)}
      </ul>
    );
  }
}

Following.propTypes = {
  username: PropTypes.string.isRequired,
  getFollowing: PropTypes.func,
};
Following.defaultProps = {getFollowing}

function renderFollowing(following) {
  return following
    .map(followingUser => <FollowingItem key={followingUser.id} following={followingUser} />);
}

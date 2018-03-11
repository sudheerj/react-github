import React from 'react';
import FollowerItem from './FollowerItem';
import {getFollowers} from '../services/github-api'
import PropTypes from 'prop-types'

export default class Followers extends React.Component  {
  constructor() {
    super()
    this.state = {followers: []}
  }

  getFollowers() {
    const {username} = this.props
    this.props.getFollowers(username).then(followers => {
      this.setState({followers});
    });
  }

  componentWillMount() {
    this.getFollowers();
  }

  render() {
    const {followers} = this.state
    return (
      <ul className="list-unstyled">
        {renderFollowers(followers)}
      </ul>
    );
  }
}

Followers.propTypes = {
  username: PropTypes.string.isRequired,
  getFollowers: PropTypes.func,
};
Followers.defaultProps = {getFollowers}

function renderFollowers(followers) {
    console.log(followers);
  return followers
    .map(follower => <FollowerItem key={follower.id} follower={follower} />);
}

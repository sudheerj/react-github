import React from 'react';
import StarItem from './StarItem';
import {getStars} from '../services/github-api'
import PropTypes from 'prop-types'

export default class Stars extends React.Component  {
  constructor() {
    super()
    this.state = {stars: []}
  }

  getStars() {
    const {username} = this.props
    this.props.getStars(username).then(stars => {
      this.setState({stars});
    });
  }

  componentWillMount() {
    this.getStars();
  }

  render() {
    const {stars} = this.state
    const {filter} = this.props
    return (
      <ul className="list-unstyled">
        {renderStars(stars, filter.toLowerCase())}
      </ul>
    );
  }
}

Stars.propTypes = {
  filter: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  getStars: PropTypes.func,
};
Stars.defaultProps = {getStars}

function renderStars(stars, filter) {
  return stars
    .filter(star => {
      return !filter ||
        (star.name && star.name.toLowerCase().includes(filter)) ||
        (star.description && star.description.toLowerCase().includes(filter));
    })
    .sort((a, b) => Date.parse(b.pushed_at) - Date.parse(a.pushed_at))
    .map(repo => <StarItem key={repo.id} repo={repo} />);
}

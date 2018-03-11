import React from 'react';
import RepositoryItem from './RepositoryItem';
import {getRepositories} from '../services/github-api'
import PropTypes from 'prop-types'

export default class Repositories extends React.Component  {
  constructor() {
    super()
    this.state = {repositories: []}
  }

  getRepositories() {
    const {username} = this.props
    this.props.getRepositories(username).then(repositories => {
      this.setState({repositories});
    });
  }

  componentWillMount() {
    this.getRepositories();
  }

  render() {
    const {repositories} = this.state
    const {filter} = this.props
    return (
      <ul className="list-unstyled">
        {renderRepositories(repositories, filter.toLowerCase())}
      </ul>
    );
  }
}

Repositories.propTypes = {
  filter: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  getRepositories: PropTypes.func,
};
Repositories.defaultProps = {getRepositories}

function renderRepositories(repositories, filter) {
  return repositories
    .filter(repository => {
      return !filter ||
        (repository.name && repository.name.toLowerCase().includes(filter)) ||
        (repository.description && repository.description.toLowerCase().includes(filter));
    })
    .sort((a, b) => Date.parse(b.pushed_at) - Date.parse(a.pushed_at))
    .map(repository => <RepositoryItem key={repository.id} repository={repository} />);
}

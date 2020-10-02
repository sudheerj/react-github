import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

export default RepositoryItem;

function RepositoryItem({repository}) {
  const timeUpdated = moment(repository.pushed_at).fromNow();
  return (
    <li className="border-bottom" style={{paddingBottom: '50px', paddingTop: '5px'}}>
      <h3><a href={repository.html_url} style={{color: '#0366d6', textDecoration:'underline'}}>{repository.name}</a></h3>
      <p className="text-gray .py-1">{repository.description}</p>
        <div className="pull-left f6 text-gray mt-2">
            <span style={{   border : "1px solid transparent", borderRadius:"2em",padding:"0px 10px",color:"#0366d6" , lineHeight:"22px", backgroundColor:"#f1f8ff"   }}>{repository.language}</span>
            <strong><i class="fa fa-star" style={{marginRight:"2px"}}></i>{repository.stargazers_count}</strong>
            <strong><i class="fa fa-code-fork"/> {repository.forks_count}</strong>
            <time style={{paddingLeft: '20px'}}>Updated {timeUpdated}</time>
        </div>
    </li>
  );
}

RepositoryItem.propTypes = {
    repository: PropTypes.shape({
    pushed_at: PropTypes.string,
    language: PropTypes.string,
    stargazers_count: PropTypes.number,
    forks_count: PropTypes.number,
    html_url: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
  }),
};

RepositoryItem.defaultProps = {
    repository: {},
};

import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

export default StarItem;

function StarItem({repo}) {
    const timeUpdated = moment(repo.pushed_at).fromNow();
    return (
        <li className="border-bottom" style={{paddingBottom: '50px', paddingTop: '5px'}}>
            <h3><a href={repo.html_url} style={{color: '#0366d6'}}>{repo.name}</a></h3>
            <p className="text-gray">{repo.description}</p>
            <div className="pull-left">
                <strong>{repo.language}</strong>
                <strong><i class="fa fa-star"></i> {repo.stargazers_count}</strong>
                <strong><i class="fa fa-code-fork"/> {repo.forks_count}</strong>
                <time style={{paddingLeft: '20px'}}>Updated {timeUpdated}</time>
            </div>
        </li>
    );
}

StarItem.propTypes = {
    repo: PropTypes.shape({
        pushed_at: PropTypes.string,
        language: PropTypes.string,
        stargazers_count: PropTypes.number,
        forks_count: PropTypes.number,
        html_url: PropTypes.string,
        name: PropTypes.string,
        description: PropTypes.string,
    }),
};

StarItem.defaultProps = {
    repo: {},
};

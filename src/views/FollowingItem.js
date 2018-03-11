import React from 'react';
import PropTypes from 'prop-types';

export default FollowingItem;

function FollowingItem({following}) {
    return (
        <div className="ui-g border-bottom">
            <div className="ui-g-1">
                <li>
                        <span style={{display: 'inline-block'}}>
                        <img
                            src={following.avatar_url}
                            className="avatar img-rounded img-responsive"
                            alt="User Avatar" width={50} height={50}
                        />
                        </span>
                </li>

            </div>
            <div className="ui-g-11" style={{float: 'left', marginTop: '30px'}}>
                <span className="f4 link-gray-dark">{following.name}</span>
                <span>{following.login}</span>
            </div>
        </div>
    );
}

FollowingItem.propTypes = {
    following: PropTypes.shape({
        stargazers_count: PropTypes.number,
        forks_count: PropTypes.number,
        html_url: PropTypes.string,
        name: PropTypes.string,
        description: PropTypes.string,
    }),
};

FollowingItem.defaultProps = {
    following: {},
};

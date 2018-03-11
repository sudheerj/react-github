import React from 'react';
import {getUserData} from '../services/github-api'
import PropTypes from 'prop-types';
import '../App.css';

export default class UserProfile extends React.Component {
    constructor() {
        super()
        this.state = {user: {}, orgs: []}
    }

    getUser() {
        const {username} = this.props
        getUserData(username)
            .then(({user, orgs}) => {
                this.setState({user, orgs});
            });
    }

    componentWillMount() {
        this.getUser();
    }

    render() {
        const {user, orgs} = this.state;
        return (
            <div>
                <div className="user border-bottom">
                    <img
                        src={user.avatar_url} width="230" height="230"
                        className="img-rounded img-responsive"
                        alt="User Avatar"/>
                    <h1 className="vcard-names">
                        <span className="p-name vcard-fullname d-block overflow-hidden">{user.name}</span>
                        <span className="p-nickname vcard-username d-block">{user.login}</span>
                    </h1>
                    <div className="p-note user-profile-bio">
                        <div>{user.bio}</div>
                    </div>
                </div>
                <div className="border-top py-3 clearfix border-bottom">
                    <h2 className="mb-1 h4">Organizations</h2>
                    {orgs.map(org => (
                        <img
                            key={org.id}
                            src={org.avatar_url}
                            alt="Organization Avatar"
                            data-tip={org.login} height={35} width={35} className="avatar"
                        />
                    ))}
                    {/*<Tooltip effect="solid" />*/}
                </div>
                <div className="border-bottom">
                    <span>
                        <small>Repositories</small>
                        <h2>{user.public_repos}</h2>
                        <small>Followers</small>
                        <h2>{user.followers}</h2>
                        <small>Following</small>
                        <h2>{user.following}</h2>
                    </span>
                    <span>

                    </span>
                    <span>

                    </span>
                </div>
            </div>
        );
    }
}

UserProfile.propTypes = {
    username: PropTypes.string.isRequired
}

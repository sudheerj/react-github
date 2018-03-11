import React from 'react';
import UserProfile from './UserProfile'
import Repositories from './Repositories'
import Stars from './Stars'
import Followers from './Followers'
import Following from './Following'
import RepositoryFilter from './RepositoryFilter'
import PropTypes from 'prop-types';
import {TabView, TabPanel} from 'primereact/components/tabview/TabView';

export default class Github extends React.Component {
    constructor(props) {
        super(props)
        this.state = {repoFilter: '', starFilter: ''}

    }

    handleRepoFilterUpdate = (repoFilter) => {
        this.setState({repoFilter})
    }

    handleStarFilterUpdate = (starFilter) => {
        this.setState({starFilter})
    }

    render() {
        const {username} = this.props.match.params
        const {repoFilter, starFilter} = this.state
        return (
            <div className="container">
                <div className="content-wrapper" style={{padding:'3em 11em 1em 11em'}}>
                    <div className="ui-g">
                        <div className="ui-g-3">
                            <UserProfile username={username}/>
                        </div>
                        <div className="ui-g-9">
                            <TabView>
                                <TabPanel header="Repositories">
                                    <RepositoryFilter onUpdate={this.handleRepoFilterUpdate} placeholder="Search repositories…"/>
                                    <Repositories filter={repoFilter}  username={username}/>
                                </TabPanel>
                                <TabPanel header="Stars" >
                                    <RepositoryFilter onUpdate={this.handleStarFilterUpdate} placeholder="Search starred repositories…"/>
                                    <Stars filter={starFilter} username={username}/>
                                </TabPanel>
                                <TabPanel header="Followers">
                                    <Followers username={username}/>
                                </TabPanel>
                                <TabPanel header="Following">
                                    <Following username={username}/>
                                </TabPanel>
                            </TabView>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Github.propTypes = {
    params: PropTypes.shape({
        username: PropTypes.string,
    }),
}

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './index.css';
import Search from './views/Search';
import Github from './views/Github';

import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/omega/theme.css';
import 'font-awesome/css/font-awesome.css';

ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/reactjs-github" component={Search}/>
            <Route path="/:username" component={Github}/>
        </div>
    </Router>, document.getElementById('root'));



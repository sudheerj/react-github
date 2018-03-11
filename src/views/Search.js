import React from "react";
import {Card} from "primereact/components/card/Card";
import {Button} from "primereact/components/button/Button";
import {InputText} from "primereact/components/inputtext/InputText";
import {withRouter} from "react-router-dom";
import PropTypes from 'prop-types';

class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            value: ''
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = (e) => {
        e.preventDefault();
        this.props.history.push(`/react-github/${this.state.value}`);
    }

    render() {

        return (

            <form className="container home">
                <Card title="Github account" style={{width: '360px', left: '100px', top: '200px'}}
                      className="ui-card-shadow">
                    <div className="ui-inputgroup">
                        <span className="ui-inputgroup-addon"><i className="fa fa-user"></i></span>
                        <InputText placeholder="Username" onChange={(e) => this.setState({value: e.target.value})}/>
                        <Button label="Go" icon="fa-check" onClick={this.handleClick}/>
                    </div>
                </Card>
            </form>
        );
    }
}

export default withRouter(Search);

Search.propTypes = {
    params: PropTypes.shape({
        username: PropTypes.string,
    }),
}

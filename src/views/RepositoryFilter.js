import React from 'react';
import PropTypes from 'prop-types'
import {InputText} from 'primereact/components/inputtext/InputText';


export default class RepositoryFilter extends React.Component  {
  render() {
    return (
      <div className="border-bottom">
        <InputText
          type="text" className="form-control width-full js-autosearch-field"
          placeholder={this.props.placeholder}
          onKeyUp={({target: {value}}) => this.props.onUpdate(value)}
        />
      </div>
    );
  }
}

RepositoryFilter.propTypes = {
  onUpdate: PropTypes.func.isRequired,
};

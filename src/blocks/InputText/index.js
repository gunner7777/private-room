import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './InputText.css';

class InputText extends Component {
  constructor() {
    super();
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({
      value: this.props.inpValue === undefined ? '' : this.props.inpValue
    });
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  render() {
    const allClass = this.props.dopClass === undefined ? "InputField" : `InputField ${this.props.dopClass}`;
    return (
      <div>
        <label>{this.props.labelText}<br/>
        <input 
          type="text"
          id={this.props.inputLabelLink}
          className={allClass}
          placeholder={this.props.labelText}
          value={this.state.value}
          onChange={this.handleChange} />
        </label>
      </div>
    );
  }
}


InputText.propTypes = {
  dopClass: PropTypes.string,
  inputLabelLink: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired
};

export default InputText;
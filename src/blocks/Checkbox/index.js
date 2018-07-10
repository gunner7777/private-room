import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Checkbox.css';

class Checkbox extends Component {
  constructor() {
    super();
    this.state = {
      checked: false
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({
      checked: this.props.checkValue === "1" ? true : false
    });
  }

  handleChange(e) {
    this.setState({
      checked: !this.state.checked
    });
  }

  render() {
    return (
      <input
        className={`Checkbox ${this.props.nameClass}`}
        onChange={this.handleChange}
        type="checkbox"
        value="1"
        checked={this.state.checked === true ? "checked" : ""} />
    );
  }
}

Checkbox.propTypes = {
  nameClass: PropTypes.string
}

export default Checkbox;
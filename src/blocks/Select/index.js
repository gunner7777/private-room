import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  constructor() {
    super();
    this.state = {
        value: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({
        value: this.props.selValue === undefined ? this.props.selectOption[0] : this.props.selValue
    });
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  render() {
    const opt = this.props.selectOption.map((item, index) => {
      return (
          <option key={index}>{item}</option>
      );
    });

    return (
      <select
        id={this.props.selectName}
        className={this.props.selectName}
        value={this.state.value}
        onChange={this.handleChange} >
        {opt}
      </select>
    );
  }
}


Select.propTypes = {
  selValue: PropTypes.string,
  selectOption: PropTypes.array.isRequired,
  selectName: PropTypes.string.isRequired
};

export default Select;
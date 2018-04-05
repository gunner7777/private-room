import React, { Component } from 'react';
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
    //console.log(this.props.inpValue);
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


/*
const InputText = (props) => {
  return (
    <div>
      <label>{props.labelText}<br/>
      <input type="text" id={props.inputLabelLink} className="InputField" placeholder={props.labelText} />
      </label>
    </div>
  );
};*/

export default InputText;
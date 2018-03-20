import React, { Component } from 'react';

//const propsF = ['first', 'second'];

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
        //console.log(this.props.selValue);
        //console.log('sel state', this.state.value);
        const opt = this.props.selectOption.map(item => {
            return (
                <option>{item}</option>
            );
        });

        return (
          <select
            id={this.props.selectName}
            className={this.props.selectName}
            value={this.state.value}
            onChange={this.handleChange}>
            {opt}
          </select>
        );
    }
}

/*
const Select = (props) => {
    const opt = props.selectOption.map(item => {
        return (
            <option>{item}</option>
        );
    });
    return (
        <select>
          {opt}
        </select>
    )
}*/

export default Select;
import React, { Component } from 'react';

//const propsF = ['first', 'second'];

class Select extends Component {
    constructor() {
        super();
        this.state = {
            value: 'Менеджер'
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        });
    }

    render() {
        const opt = this.props.selectOption.map(item => {
            return (
                <option>{item}</option>
            );
        });

        return (
          <select
            id={this.props.selectName}
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
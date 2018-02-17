import React from 'react';

const propsF = ['first', 'second'];

const Select = () => {
    const opt = propsF.map(item => {
        return (
            <option>{item}</option>
        );
    });
    return (
        <select>
          {opt}
        </select>
    )
}

export default Select;
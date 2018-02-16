import React from 'react';
import './InputFile.css';

class InputFile extends React.Component {


  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(item) {
    let pathArr = item.value.split('\\');

    // must be state
    document.querySelector('.InputFile-Text').innerHTML = pathArr[pathArr.length-1];
  }

  render() {
    return (
      <React.Fragment>
        <input type="file" id="addfile" className="inputfile" onChange={e => this.handleChange(e.target)} />
        <label htmlFor="addfile">
          <i class="far fa-folder-open"></i>
          <span className="InputFile-Text">Choose a file</span>
        </label>
      </React.Fragment>
    );
  }
}

export default InputFile;
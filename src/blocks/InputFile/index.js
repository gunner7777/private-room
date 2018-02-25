import React from 'react';
import { connect } from 'react-redux';
import { uploadFile } from '../../actions';
import './InputFile.css';
import Button from '../Button';
import Select from '../Select';

class InputFile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fileName: this.props.file.fileName
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const pathArr = e.target.value.split('\\');
    this.setState({
      fileName: pathArr[pathArr.length-1]
    });

    setTimeout(() => {
      document.querySelector('.InputFile-Text').innerHTML = this.state.fileName;
    }, 300); 
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  handleClick() {
    const data = new FormData();
    //let d = document.getElementById('addfile');
    data.append('upload', document.getElementById('addfile').files[0]);
    this.props.uploadFile(this.props.fileType, data, this.state.fileName);
  }

  render() {
    return (
      <form action="" encType="multipart/form-data" onSubmit={this.handleSubmit}>
        <input
          type="file"
          id="addfile"
          className="inputFile"
          name="upload"
          onChange={this.handleChange} />
        <label htmlFor="addfile">
          <i className="far fa-folder-open"></i>
          <span className="InputFile-Text">Choose a file</span>
        </label>
        { this.props.withSelect ? <Select /> : "" }
        <Button text="Upload" buttonClick={this.handleClick} />
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    file: state.file
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    uploadFile: (type, data, fileName) => dispatch(uploadFile(type, data, fileName))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputFile);
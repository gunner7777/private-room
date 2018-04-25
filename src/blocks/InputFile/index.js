import React from 'react';
import { connect } from 'react-redux';
import { uploadFile, uploadFileBefore } from '../../actions';
import './InputFile.css';
import Button from '../Button';
import Select from '../Select';

class InputFile extends React.Component {
  constructor(props) {
    super(props);
    this.idInput = "0";
    this.state = {
      fileName: this.props.file.fileName,
      uploadSuccess: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const pathArr = e.target.value.split('\\');
    console.log(pathArr[pathArr.length-1].toLowerCase());
    this.setState({
      fileName: pathArr[pathArr.length-1].toLowerCase()
    });
  
    const node = e.target.parentElement.parentElement;

    setTimeout(() => {
      node.querySelector('.InputFile-Text').innerHTML = this.state.fileName;
      const noUpload = {
        ok: false,
        fileName: this.state.fileName,
        buttonId: this.idInput
      };
      this.props.uploadReset(noUpload);
    }, 300);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  handleClick(e) {
    const data = new FormData();

    data.append('upload', e.target.previousSibling.previousSibling.files[0]);


    // get dogovor number and create dir with this name
    //data.set('dirname', this.props.contractNumber);
    data.set('dirname', this.props.dirname);
    this.props.uploadFile(this.props.fileType, data, this.state.fileName, this.idInput);
  }

  render() {
    //console.log(this.idInput);
    this.idInput = this.props.inputId === undefined ? this.idInput : this.props.inputId;
    console.log("fName", this.props.fName);
    return (
      <form action="" encType="multipart/form-data" onSubmit={this.handleSubmit}>
        <input
          type="file"
          id={`addfile_${this.idInput}`}
          className="inputFile"
          name="upload"
          onChange={this.handleChange} />
        <label htmlFor={`addfile_${this.idInput}`}>
          <i className="far fa-folder-open"></i>
          <span className="InputFile-Text">{((this.props.fName !== "")&&(this.props.fName !== undefined)) ? this.props.fName : "Choose a file"}</span>
        </label>

        <Button
          text="Upload"
          id={this.idInput}
          uplFile={this.props.uploaded}
          buttonClick={this.handleClick} />
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    file: state.file,
    contractNumber: state.newContract.newContract.name
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    uploadFile: (type, data, fileName, butId) => dispatch(uploadFile(type, data, fileName, butId)),
    uploadReset: (data) => dispatch(uploadFileBefore(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputFile);
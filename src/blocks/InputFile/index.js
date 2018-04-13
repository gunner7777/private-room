import React from 'react';
import { connect } from 'react-redux';
import { uploadFile, uploadFileBefore } from '../../actions';
import './InputFile.css';
import Button from '../Button';
import Select from '../Select';

class InputFile extends React.Component {
  constructor(props) {
    super(props);
    let idInput = "0";
    this.state = {
      fileName: this.props.file.fileName,
      uploadSuccess: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
/*
  componentWillReceiveProps(nextProps) {
    this.setState({
      uploadSuccess: nextProps.file.ok
    });
  }
*/
  handleChange(e) {
    const pathArr = e.target.value.split('\\');
    this.setState({
      fileName: pathArr[pathArr.length-1]
    });
  
    const node = e.target.parentElement.parentElement;

    setTimeout(() => {
      node.querySelector('.InputFile-Text').innerHTML = this.state.fileName;
    }, 300);

    this.props.uploadReset(false);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  handleClick(e) {
    const data = new FormData();

    data.append('upload', e.target.previousSibling.previousSibling.files[0]);

    //console.log(this.idInput);
    // get dogovor number and create dir with this name
    data.set('dirname', this.props.contractNumber);
    this.props.uploadFile(this.props.fileType, data, this.state.fileName, this.idInput);
  }


/*
  componentDidMount() {
    this.setState({
      uploadSuccess: this.props.file.ok
    });
    //console.log("was");
  }*/

  render() {
    //console.log(this.state.uploadSuccess);
    //console.log(this.props.file.ok);
    //let uploadClass = this.props.uploaded !== undefined ? "" : "Button_uploaded";
    //console.log(uploadClass);
    this.idInput = this.props.inputId === undefined ? this.idInput : this.props.inputId;
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
          <span className="InputFile-Text">{this.props.fName !== "" ? this.props.fName : "Choose a file"}</span>
        </label>
        {/*{ this.props.withSelect ? <Select /> : "" }*/}
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
    uploadReset: (bool) => dispatch(uploadFileBefore(bool))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputFile);
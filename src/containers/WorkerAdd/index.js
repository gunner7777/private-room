import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputText from '../../blocks/InputText';
import Select from '../../blocks/Select';
import InputFile from '../../blocks/InputFile';
import Button from '../../blocks/Button';
import ErrorValidator from '../../blocks/ErrorValidator';
import { errorValid } from '../../modules/errorValid';
import { addWorker, uploadFileBefore } from '../../actions';

class WorkerAdd extends Component {
  constructor() {
    super();

    this.state = {
      photoLink: '',
      error: {
        bool: false,
        field: ""
      }
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.file.ok) {
      this.setState({
        photoLink: 'http://теплофф.рф/upploaddds/' + nextProps.file.fileName
      });
    }
  }

  handleClick() {
    let fi;
    let phone;
    
    fi = document.getElementById('workerFI').value;
    if(errorValid(fi, "ФИ сотрудника", this) === true) {
      return;
    }

    phone = document.getElementById('workerPhone').value;
    if(errorValid(phone, "Телефон", this) === true) {
      return;
    }

    const newWorker = {
      fi: document.getElementById('workerFI').value,
      post: document.getElementById('workerPost').value,
      photo_link: this.state.photoLink,
      phone: document.getElementById('workerPhone').value,
      mail: document.getElementById('workerMail').value,
    };

    this.props.addWorker(newWorker);
  }

  componentWillUnmount() {
    const noUpload = {
      ok: false,
      fileName: '',
      buttonId: ''
    };
    this.props.uploadReset(noUpload);
  }

  render() {
    //const select = ['Менеджер', 'Архитектор', 'Прораб'];
    const hasError = this.state.error.bool === false ? "" : <ErrorValidator fieldName={this.state.error.field} />;
    return (
      <div className="WorkerAdder">
        {hasError}
        <InputText inputLabelLink="workerFI" labelText="Фамилия Имя сотрудника" />
        <p>Должность сотрудника</p>
        <Select selectOption = {this.props.selectPost} selectName="workerPost" />
        {/*<InputText inputLabelLink="workerPhoto" labelText="Фото сотрудника" />*/}
        <br/>
        <InputFile
          fileType="photo"
          uploaded={this.props.file.ok} />
        {/*<img src={this.state.photoLink}/>*/}
        <InputText inputLabelLink="workerPhone" labelText="Телефон" />
        <InputText inputLabelLink="workerMail" labelText="E-mail" />
        <Button
          text="Добавить"
          buttonClick={this.handleClick} />
      </div>
    );  
  }
}

const mapStateToProps = (state) => {
  return {
    file: state.file,
    selectPost: state.workers.selectPost
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addWorker: (data) => dispatch(addWorker(data)),
    uploadReset: (data) => dispatch(uploadFileBefore(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkerAdd);
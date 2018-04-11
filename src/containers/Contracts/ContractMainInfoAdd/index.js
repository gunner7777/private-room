import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputText from '../../../blocks/InputText';
import Button from '../../../blocks/Button';
import InputDate from '../../../blocks/InputDate';
import ErrorValidator from '../../../blocks/ErrorValidator';
import { saveMainInfoToStore } from '../../../actions';
import { errorValid } from '../../../modules/errorValid';

class ContractMainInfoAdd extends Component {
  constructor() {
    super();

    this.state = {
      error: {
        bool: false,
        field: ""
      }
    };

    this.saveMainInfo = this.saveMainInfo.bind(this);
  }

  saveMainInfo() {
    let name;
    //console.log("dfdf");
    //console.log(errorValid(document.getElementById('contractName').value, this));
    //console.log("input", document.getElementById('contractName').value);
    if(errorValid(document.getElementById('contractName').value, this) === true) {
      console.log("true");
      return;
    }
    /*let checkVal;
    checkVal = document.getElementById('contractName').value;
    if(checkVal !== "") {
      name = checkVal;
    } else {
      this.setState({
        error: {
          bool: !this.state.error.bool,
          field: "ФИ заказчика"
        }
      });
      return;
    }*/

    const mainInfo = {
      name: name,
      date: document.querySelector('.DayPickerInput input').value,
      fi_zakaz: document.getElementById('contractFI').value,
      o_zakaz: document.getElementById('contractO').value,
      phone: document.getElementById('contractPhone').value,
      comments: document.getElementById('contractComments').value
    };

    this.props.saveMainInfoToStore(mainInfo);
  }

   render() {
    setTimeout(() => {
      console.log("state comp", this.state.error.bool);
    }, 800)
     const hasError = this.state.error.bool === false ? "" : <ErrorValidator fieldName={this.state.error.name} />;
     return (
      <div>
        {hasError}
        <InputText
          inputLabelLink="contractName"
          labelText="Договор" 
          inpValue={this.props.newContract.name !== undefined ? this.props.newContract.name : ""} />
        <InputDate 
          eventDate={this.props.newContract.date !== undefined ? this.props.newContract.date : ""} />
        <InputText
          inputLabelLink="contractFI"
          labelText="Фамилия Имя заказчика"
          inpValue={this.props.newContract.fi_zakaz !== undefined ? this.props.newContract.fi_zakaz : ""} />
        <InputText
          inputLabelLink="contractO"
          labelText="Отчество заказчика"
          inpValue={this.props.newContract.o_zakaz !== undefined ? this.props.newContract.o_zakaz : ""} />
        <InputText
          inputLabelLink="contractPhone"
          labelText="Телефон"
          inpValue={this.props.newContract.phone !== undefined ? this.props.newContract.phone : ""} />
        <InputText
          inputLabelLink="contractComments"
          labelText="Комментарии к договору"
          inpValue={this.props.newContract.comments !== undefined ? this.props.newContract.comments : ""} />
        <Button
          text="Добавить"
          buttonClick={this.saveMainInfo} />
      </div>
     );
   }

}

const mapStateToProps = (state) => {
  return {
    newContract: state.newContract.newContract
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveMainInfoToStore: (data) => dispatch(saveMainInfoToStore(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContractMainInfoAdd);
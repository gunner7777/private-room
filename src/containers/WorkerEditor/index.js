import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputText from '../../blocks/InputText';
import Select from '../../blocks/Select';
import InputFile from '../../blocks/InputFile';
import Button from '../../blocks/Button';
import { updateWorkerInfo } from '../../actions';

class WorkerEditor extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const updWorker = {
      id: this.props.worker.id_worker,
      fi: document.getElementById('workerFI').value,
      post: document.getElementById('workerPost').value,
      photo_link: this.props.worker.photo_link,
      phone: document.getElementById('workerPhone').value,
      mail: document.getElementById('workerMail').value,
    };
    console.log("update", updWorker);
    this.props.updateWorker('http://теплофф.рф/tyryr/worker/update.php', updWorker);
  }

  render() {
    console.log("editro", this.props.worker);
    const { id_worker, fi, post, photo_link, phone, mail } = this.props.worker;
    const select = ['Менеджер', 'Архитектор', 'Прораб'];
    return (
      <div>
        <InputText inputLabelLink="workerFI" labelText="Фамилия Имя сотрудника" inpValue={fi}/>
        <p>Должность сотрудника</p>
        <Select selectOption = {select} selectName="workerPost" selValue={post}/>
        <br/>
        <InputFile fileType="photo"/>
        <img src={photo_link} alt="worker" />
        <InputText inputLabelLink="workerPhone" labelText="Телефон" inpValue={phone}/>
        <InputText inputLabelLink="workerMail" labelText="E-mail" inpValue={mail}/>
        <Button text="Сохранить" buttonClick={this.handleClick} />
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  //console.log("state", state.worker);
  return {
      worker: state.workers.single
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateWorker: (url, data) => dispatch(updateWorkerInfo(url, data)) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkerEditor);
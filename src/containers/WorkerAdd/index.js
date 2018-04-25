import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputText from '../../blocks/InputText';
import Select from '../../blocks/Select';
import InputFile from '../../blocks/InputFile';
import Button from '../../blocks/Button';
import { addWorker } from '../../actions';

class WorkerAdd extends Component {
    constructor() {
        super();

        this.state = {
            photoLink: ''
        };

        this.handleClick = this.handleClick.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        if(this.props.file.ok) {
            this.setState({
                photoLink: 'http://теплофф.рф/upploaddds/' + nextProps.file.fileName
            });
        }
    }

    handleClick() {
        const newWorker = {
            fi: document.getElementById('workerFI').value,
            post: document.getElementById('workerPost').value,
            photo_link: this.state.photoLink,
            phone: document.getElementById('workerPhone').value,
            mail: document.getElementById('workerMail').value,
        };

        this.props.addWorker(newWorker);
    }

    render() {
        const select = ['Менеджер', 'Архитектор', 'Прораб'];
        return (
            <React.Fragment>
                <InputText inputLabelLink="workerFI" labelText="Фамилия Имя сотрудника" />
                <p>Должность сотрудника</p>
                <Select selectOption = {select} selectName="workerPost" />
                {/*<InputText inputLabelLink="workerPhoto" labelText="Фото сотрудника" />*/}
                <br/>
                <InputFile
                    fileType="photo"
                    uploaded={this.props.file.ok} />
                <img src={this.state.photoLink}/>
                <InputText inputLabelLink="workerPhone" labelText="Телефон" />
                <InputText inputLabelLink="workerMail" labelText="E-mail" />
                <Button
                    text="Добавить"
                    buttonClick={this.handleClick} />
            </React.Fragment>
        );  
    }
}

const mapStateToProps = (state) => {
    console.log(state.file);
    return {
        file: state.file
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addWorker: (data) => dispatch(addWorker(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkerAdd);
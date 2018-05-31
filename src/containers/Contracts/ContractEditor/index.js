import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Route, Switch, Redirect } from 'react-router-dom';
import ContractMainInfoEditor from '../../../components/Contracts/ContractMainInfoEditor';
import ContractDocsEditor from '../../../components/Contracts/ContractDocsEditor';
import ContractPlanEditor from '../../../components/Contracts/ContractPlanEditor';
import ContractPaysEditor from '../../../components/Contracts/ContractPaysEditor';
import ContractDWEditor from '../../../components/Contracts/ContractDWEditor';
import InputText from '../../../blocks/InputText';
import Select from '../../../blocks/Select';
import InputFile from '../../../blocks/InputFile';
import Button from '../../../blocks/Button';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import MomentLocaleUtils, {
  formatDate,
  parseDate,
} from 'react-day-picker/moment';

import 'moment/locale/ru';
import { getContract, updateMainInfo, updateDocs, updatePlan, updatePayments, updateDogovorWorkers } from '../../../actions';



import EditorMenu from '../../../components/EditorMenu';
import EditorBlock from '../../../components/EditorBlock';
import { errorValid } from '../../../modules/errorValid';

class ContractEditor extends Component {
    constructor(props) {
      super(props);


      this.state = {
        error: {
          bool: false,
          field: ""
        }
      };

      this.handleClickMI = this.handleClickMI.bind(this);
      this.handleClickDocs = this.handleClickDocs.bind(this);
      this.handleClickPlan = this.handleClickPlan.bind(this);
      this.handleClickPayments = this.handleClickPayments.bind(this);
      this.handleClickDW = this.handleClickDW.bind(this); 
    }
    
    componentDidMount() {
      this.props.fetchData(this.props.match.params.id);
    }

    handleClickMI() {

      let name;
      let date;
      let fi_zakaz;
      let phone;
    
      name = document.getElementById('contractName').value;
      if(errorValid(name, "Номер договора", this) === true) {
        return;
      }

      date = document.querySelector('.DayPickerInput input').value;
      if(errorValid(date, "Дата договора", this) === true) {
        return;
      }
      
      fi_zakaz = document.getElementById('contractFI').value;
      if(errorValid(fi_zakaz, "ФИ заказчика", this) === true) {
        return;
      }

      phone = document.getElementById('contractPhone').value;
      if(errorValid(phone, "Телефон", this) === true) {
        return;
      }

      const mInfo = {
        id: this.props.contract.id_dog,
        name: name,
        date: date,
        fi_zakaz: fi_zakaz,
        o_zakaz: document.getElementById('contractO').value,
        phone: phone,
        comments: document.getElementById('contractComments').value
      }
      this.props.updateMInfo(mInfo);
    }

    handleClickDocs() {
      const docsArr = [];
      const docNodes = document.querySelectorAll('.docBlock');
      for(const item of docNodes) {
        /*let isUploaded = item.querySelector('.Button').classList.contains('Button_uploaded');
        console.log(isUploaded);
        if(!isUploaded) {
          continue;
        }*/
        //if((item.querySelector('.InputFile-Text').innerHTML !== "Choose a file")&&(item.querySelector('.InputFile-Text').innerHTML !== "")) {
        if(item.querySelector('.Button').classList.contains('Button_uploaded')) {
          docsArr.push({
            id_doc: item.getAttribute('data-docid'),
            //type: item.querySelector('.inputDocsName').value,
            type: item.querySelector('.contractDocs').value,
            
            link: '/contracts/' + this.props.contract.name + '/' + item.querySelector('.InputFile-Text').innerHTML,
          });
        }
      }
      const docsUpdater = {
        id: this.props.contract.id_dog,
        docs: docsArr
      };
      this.props.updateDocs(docsUpdater);
    }

    handleClickPlan() {
      const planArr = [];
      const planNodes = document.querySelectorAll('.planBlock');
      for(const item of planNodes) {
        if(item.querySelector('.inputPlanWorkname').value === "") {
          continue;
        }

        planArr.push({
          id_plan: item.getAttribute('data-planid'),
          date: item.querySelector('.DayPickerInput input').value,
          workname: item.querySelector('.inputPlanWorkname').value,
          status: item.querySelector('.planStatus').value,
          //status: item.querySelector('.planStatus').checked ? "1" : "0"
        });
      }
      const planUpdater = {
        id: this.props.contract.id_dog,
        plan: planArr
      };
      this.props.updatePlan(planUpdater);
    }

    handleClickPayments() {
      const payArr = [];
      const payNodes = document.querySelectorAll('.payBlock');
      for(const item of payNodes) {
        if(item.querySelector('.inputStagePayment').value === "") {
          continue;
        }

        payArr.push({
          id_pay: item.getAttribute('data-payid'),
          stage_payment: item.querySelector('.inputStagePayment').value,
          date: item.querySelector('.DayPickerInput input').value,
          summa: item.querySelector('.inputSumma').value,
          status: item.querySelector('.payStatus').checked ? "1" : "0"
        });
      }

      const payUpdater = {
        id: this.props.contract.id_dog,
        payments: payArr
      };
      this.props.updatePayments(payUpdater);
    }
    
    handleClickDW() {
      const dwArr = [];
      const dwNodes = document.querySelectorAll('.dwBlock');
      for(const item of dwNodes) {
        dwArr.push({
          id_dw: item.getAttribute('data-dwid'),
          id_worker: this.getIdByName(item.querySelector('.contractDwName').value),
          main_worker: item.querySelector('.contractDwMain').checked ? "1" : "0"
        });
      }
      const dwUpdater = {
        id: this.props.contract.id_dog,
        dw: dwArr
      };
      this.props.updateDogovorWorkers(dwUpdater, this.props.workers);
    }

    getIdByName(name) {
      let findName;
      this.props.workers.map(w => {
        if(name.indexOf(w.fi) != -1) {
          return findName = w.id_worker;
        }
      });

      return findName;
    }

    render() {
      if(this.props.isLoading) {
        return <p>Loading data</p>;
      }

      const {
        name,
        date,
        fi_zakaz,
        o_zakaz,
        phone,
        comments,
        docs,
        plan,
        payments,workers
      } = this.props.contract;
      
        return (
          <div>
            <EditorMenu 
              urlId={this.props.match.params.id}
            />
            <Switch>
      <Route
        exact
        path={`/contract/${this.props.match.params.id}/edit`}
        render={() => (<p>HOME</p>)}
      />
      <Route
        path={`/contract/${this.props.match.params.id}/edit/common`}
        render={() => 
            <ContractMainInfoEditor
              name={name}
              date={date}
              fi_zakaz={fi_zakaz}
              o_zakaz={o_zakaz}
              phone={phone}
              comments={comments}
              updateMainInfo={this.handleClickMI}
              //error={this.state.error.bool}
              {...this.state.error}
            />
          } 
      />
      <Route
        path={`/contract/${this.props.match.params.id}/edit/docs`}
        render={() => 
          <ContractDocsEditor 
            docs={docs}
            options={this.props.selectOpt}
            updateDocs={this.handleClickDocs}
          />
        }
      />
      <Route
        path={`/contract/${this.props.match.params.id}/edit/plan-rabot`}
        render={() => 
          <ContractPlanEditor
            plan={plan}
            updatePlan={this.handleClickPlan}
          />
        }
      />
      <Route
        path={`/contract/${this.props.match.params.id}/edit/payments`}
        render={() => 
          <ContractPaysEditor
            payments={payments}
            updatePays={this.handleClickPayments}
          />
        }
      />
      <Route
        path={`/contract/${this.props.match.params.id}/edit/workers`}
        render={() => 
          <ContractDWEditor
            dwlink={workers}
            workersFiPost={this.props.workersFiPost}
            selectPost={this.props.selectPost}
            updateDwLink={this.handleClickDW}
          />
        }
      />
    </Switch>
            
          </div>
        );
    }
  }

  
  const mapStateToProps = (state) => {
    return {
      contract: state.contract.contract,
      isLoading: state.contract.isLoading,
      selectOpt: state.contract.selectOpt,
      workers: state.workers.workers,
      /*workersId: state.workers.workers.map(id => {
        return id.id_worker;
      }),*/
      workersFiPost: state.workers.workers.map(w => {
        return (w.fi + ", " + w.post);
      }),
      selectPost: state.workers.selectPost
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      fetchData: (id) => dispatch(getContract(id)),
      updateMInfo: (data) => dispatch(updateMainInfo(data)),
      updateDocs: (data) => dispatch(updateDocs(data)),
      updatePlan: (data) => dispatch(updatePlan(data)),
      updatePayments: (data) => dispatch(updatePayments(data)),
      updateDogovorWorkers: (data, w) => dispatch(updateDogovorWorkers(data, w))
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(ContractEditor);
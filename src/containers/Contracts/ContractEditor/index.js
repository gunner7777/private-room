import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Route, Switch, Redirect } from 'react-router-dom';
import ContractMainInfoEditor from '../../../components/Contracts/ContractMainInfoEditor';
import ContractDocsEditor from '../../../components/Contracts/ContractDocsEditor';
import ContractPlanEditor from '../../../components/Contracts/ContractPlanEditor';
import ContractPaysEditor from '../../../components/Contracts/ContractPaysEditor';
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
import { getContract, updateMainInfo, updateDocs, updatePlan, updatePayments } from '../../../actions';


import EditorMenu from '../../../components/EditorMenu';
import EditorBlock from '../../../components/EditorBlock';

class ContractEditor extends Component {
    constructor(props) {
      super(props);

      this.handleClickMI = this.handleClickMI.bind(this);
      this.handleClickDocs = this.handleClickDocs.bind(this);
      this.handleClickPlan = this.handleClickPlan.bind(this);
      this.handleClickPayments = this.handleClickPayments.bind(this);
    }
    
    componentDidMount() {
      this.props.fetchData(this.props.match.params.id);
    }

    handleClickMI() {
      const mInfo = {
        id: this.props.contract.id_dog,
        name: document.getElementById('contractName').value,
        //date: document.getElementById('contractDate').value,
        date: document.querySelector('.DayPickerInput input').value,
        fi_zakaz: document.getElementById('contractFI').value,
        o_zakaz: document.getElementById('contractO').value,
        phone: document.getElementById('contractPhone').value,
        comments: document.getElementById('contractComments').value
      }
      this.props.updateMInfo(mInfo);
    }

    handleClickDocs() {
      const docsArr = [];
      const docNodes = document.querySelectorAll('.docBlock');
      for(const item of docNodes) {
        docsArr.push({
          id_doc: item.getAttribute('data-docid'),
          //type: item.querySelector('.inputDocsName').value,
          type: item.querySelector('.contractDocs').value,
          
          link: item.querySelector('.inputDocsLink').value
        });
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
        planArr.push({
          id_plan: item.getAttribute('data-planid'),
          date: item.querySelector('.DayPickerInput input').value,
          workname: item.querySelector('.inputPlanWorkname').value,
          status: "1"
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
        payArr.push({
          id_pay: item.getAttribute('data-payid'),
          stage_payment: item.querySelector('.payStageName').value,
          summa: item.querySelector('.paySumma').value,
          status: "1"
        });
      }
      const payUpdater = {
        id: this.props.contract.id_dog,
        payments: payArr
      };
      this.props.updatePayments(payUpdater);
    }
    
    render() {
      if(this.props.isLoading) {
        return <p>Loading data</p>;
      }

      const { name, date, fi_zakaz, o_zakaz, phone, comments, docs, plan, payments, workers } = this.props.contract;
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
          <p>WORKERS</p>
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
      selectOpt: state.contract.selectOpt
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      fetchData: (id) => dispatch(getContract(id)),
      updateMInfo: (data) => dispatch(updateMainInfo(data)),
      updateDocs: (data) => dispatch(updateDocs(data)),
      updatePlan: (data) => dispatch(updatePlan(data)),
      updatePayments: (data) => dispatch(updatePayments(data))
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(ContractEditor);
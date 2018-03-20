import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContractMainInfoEditor from '../../../components/Contracts/ContractMainInfoEditor';
import ContractDocsEditor from '../../../components/Contracts/ContractDocsEditor';
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
import { getContract, updateMainInfo, updateDocs } from '../../../actions';


class ContractEditor extends Component {
    constructor(props) {
      super(props);
  
      this.handleClickMI = this.handleClickMI.bind(this);
      this.handleClickDocs = this.handleClickDocs.bind(this);
    }
    
    componentDidMount() {
      this.props.fetchData(this.props.match.params.id);
    }
    
    handleClickMI() {
      const mInfo = {
        id: this.props.contract.id_dog,
        name: document.getElementById('contractName').value,
        date: document.getElementById('contractDate').value,
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
      //console.log(docNodes);
      /*const docsArr = docNodes.map(docs => {
         return docs.getAttribute('data-docid');
      });*/
      for(const item of docNodes) {
        //console.log(item.getAttribute('data-docid'));
        //console.log(item.querySelector('.inputDocsName').value);
        docsArr.push({
          id_doc: item.getAttribute('data-docid'),
          type: item.querySelector('.inputDocsName').value,
          link: item.querySelector('.inputDocsLink').value
        });
      }
      //console.log(docsArr);
      const docsUpdater = {
        id: this.props.contract.id_dog,
        docs: docsArr
      };
      console.log("docsupdater", docsUpdater);
      this.props.updateDocs(docsUpdater);
    }

    render() {
      if(this.props.isLoading) {
        return <p>Loading data</p>;
      }
      //console.log(this.props.contract);
      const {id_dog, name, date, fi_zakaz, o_zakaz, phone, comments, docs, plan, payments} = this.props.contract;

      /*const docsForm = docs.map((doc) => {
        return (
          <div>
            <p>Должность сотрудника</p>
            <Select selectOption = {this.props.selectOpt} selectName="contractDocs" />
            <InputText inputLabelLink="docName" labelText="Документ" inpValue={doc.type}/>
            <InputText inputLabelLink="docLink" labelText="Ссылка на документ" inpValue={doc.link}/>
          </div>
        )
      });*/

      const planList = plan.map(p => {
        return (
          <div>
            <InputText inputLabelLink="pName" labelText="Документ" inpValue={p.workname}/>
            <DayPickerInput
              value={p.date}
            />
            <p>{p.status}</p>
          </div>
        )
      });

      const paymentsList = payments.map(pay => {
        return (
          <div data-id={pay.id_pay}>
            <InputText inputLabelLink="payName" labelText="Документ" inpValue={pay.stage_payment}/>
            <InputText inputLabelLink="paySumma" labelText="Документ" inpValue={pay.summa}/>
            <p>{pay.status}</p>
          </div>
        );
      });

        return (
          <div>
            <ContractMainInfoEditor
              name={name}
              date={date}
              fi_zakaz={fi_zakaz}
              o_zakaz={o_zakaz}
              phone={phone}
              comments={comments}
              updateMainInfo={this.handleClickMI}
            />
            <hr/>

            <ContractDocsEditor 
              docs={docs}
              options={this.props.selectOpt}
              updateDocs={this.handleClickDocs}
            />
            <hr/>

            {planList}
            <hr/>

            {paymentsList}
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
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(ContractEditor);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputText from '../../../blocks/InputText';
import Select from '../../../blocks/Select';
import InputFile from '../../../blocks/InputFile';
import Button from '../../../blocks/Button';
import { getOneDogovor } from '../../../actions';


class DogovorEditor extends Component {
    constructor(props) {
      super(props);
  
      //this.handleClick = this.handleClick.bind(this);
    }
    
    componentDidMount() {
      this.props.fetchData(this.props.match.params.id);
    }
  
    render() {
      if(this.props.isLoading) {
        return <p>Loading data</p>;
      }

      //const {id_dog, name, date, fi_zakaz, o_zakaz, comments, docs, plan, payments} = this.props.single;
        return (
          <div>
            <h4>Общая информация</h4>
            <InputText inputLabelLink="dogovorName" labelText="Договор" inpValue="name"/>
          </div>
        );
    }
  }
  
  
  const mapStateToProps = (state) => {
    console.log("state", state.dogovor.single);
    return {
      single: state.dogovor.single,
      isLoading: state.dogovor.isLoading
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      fetchData: (id) => dispatch(getOneDogovor(id))
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(DogovorEditor);
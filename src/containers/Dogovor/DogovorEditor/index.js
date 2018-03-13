import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputText from '../../../blocks/InputText';
import Select from '../../../blocks/Select';
import InputFile from '../../../blocks/InputFile';
import Button from '../../../blocks/Button';


class DogovorEditor extends Component {
    constructor(props) {
      super(props);
  
      //this.handleClick = this.handleClick.bind(this);
    }
  
    render() {
        return (
            <p>Editor</p>
        );
    }
  }
  
  
  const mapStateToProps = (state) => {
    return {
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return { 
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(DogovorEditor);
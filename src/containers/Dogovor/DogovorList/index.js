import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllDogovor } from '../../../actions';
import DogovorCard from '../../../components/DogovorCard';

class DogovorList extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    console.log(this.props.dogovor);
    const dList = this.props.dogovor === undefined ? "<p>Договоров нет</p>" : this.props.dogovor.map((dog) => {
      return (
        <DogovorCard 
          id={dog.id_dog}  
          name={dog.name}
          date={dog.date}
          fi_zakaz={dog.fi_zakaz}
          o_zakaz={dog.o_zakaz}
          phone={dog.phone}
          comments={dog.comments}
        />
      )
    });
    return (
      <div>
        {dList}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dogovor: state.dogovor.dogovor
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(getAllDogovor())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DogovorList);
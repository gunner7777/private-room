import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { getSingleWorker } from '../../actions';

class WorkerEditor extends Component {
  render() {
    console.log(this.props.worker);
    return (
      <div>
        state
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  //console.log("state", state.worker);
  return {
      worker: state.workerInfo
  }
}

export default connect(mapStateToProps)(WorkerEditor);
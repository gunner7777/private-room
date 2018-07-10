import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSingleWorker } from '../../actions';

class WorkerInfo extends Component {
    constructor(props) {
        super(props);
    }
    
    /*componentDidMount() {
        console.log("mount");
        this.props.fetchData('http://теплофф.рф/tyryr/worker/readOne.php?idw=' + this.props.workerInfo.id_worker);
    }*/
    
    /*componentWillReceiveProps(nextProps) {
        if(nextProps.worker.id_worker !== this.props.worker.id_worker) {
            console.log("nextPtops good");
        } else
            console.log("bad");
    }*/

    render() {
        console.log("info", this.props.workerInfo);
        //console.log("worker", this.props.worker);
        return (
            <div>
               ss 
                
            </div>

        )
    }
}

const mapStateToProps = (state, ownProps) => {
    //console.log("state", state.worker);
    return {
        worker: state.worker,
        workerInfo: state.workerInfo
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(getSingleWorker(url))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkerInfo);
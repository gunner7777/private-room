import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSingleWorker } from '../../actions';

class WorkerInfo extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        console.log('id', this.props.workerInfo.id_worker);
        this.props.fetchData('http://теплофф.рф/tyryr/worker/readOne.php?idw=' + this.props.workerInfo.id_worker);
    }

    render() {
        console.log("this", this.props.worker);
        return (
            <div>
                
                4W 
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    console.log("state", state.singleWorker);
    return {
        worker: state.singleWorker,
        workerInfo: state.workerInfo
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(getSingleWorker(url))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkerInfo);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSingleWorker } from '../../actions';

class WorkerInfo extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        //console.log(this.props.workerInfo);
        this.props.fetchData('http://теплофф.рф/tyryr/worker/readOne.php?idw=' + this.props.workerInfo.id_worker);
    }

    render() {
        return (
            <p>112</p>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        //singleWorker: state.singleWorker
        workerInfo: state.workerInfo
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(getSingleWorker(url))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkerInfo);
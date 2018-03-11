import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import { bindActionCreators } from 'redux';
import WorkerForm from '../../components/WorkerForm';
import WorkerCard from '../../components/WorkerCard';
import { getAllWorkers, getInfo, deleteWorker, getSingleWorker } from '../../actions';
// import { getSingleWorker } from '../../actions';
import './WorkerList.css';

class WorkerList extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.fetchData();
    }

    render() {
        console.log(this.props);
        const { workers } = this.props;
        const listOfWorkers = workers.map((worker, index) => {
            return (
                <WorkerCard
                    id={worker.id_worker}
                    photoLink={worker.photo_link}
                    fi={worker.fi}
                    post={worker.post}
                    phone={worker.phone}
                    mail={worker.mail}
                    getInfo={this.props.getInfo}
                    workerDel={this.props.deleteWorker}
                />
                /*<li key={worker.id}>
                    <Link
                        to={`/workers/${worker.id_worker}`}
                        onClick={() => this.props.getInfo(worker)}>
                            {worker.FI} {worker.post}
                    </Link>
                </li>*/
            );
        });

        return (
            <div className="WorkerList">
            {/*<ul>
                {listOfWorkers}
            </ul>*/}
                {listOfWorkers}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        workers: state.workers.workers
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getInfo: (data) => dispatch(getInfo(data)),
        fetchData: () => dispatch(getAllWorkers()),
        deleteWorker: (url, id) => dispatch(deleteWorker(url, id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkerList);
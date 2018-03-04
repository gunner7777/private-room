import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import WorkerForm from '../../components/WorkerForm';
import WorkerCard from '../../components/WorkerCard';
import { getAllWorkers, getInfo } from '../../actions';
import './WorkerList.css';

class WorkerList extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.fetchData('http://теплофф.рф/tyryr/worker/readAll.php');
    }

    render() {
        const { workers } = this.props;
        const listOfWorkers = workers.map((worker, index) => {
            return (
                <WorkerCard 
                    photoLink={worker.photo_link}
                    fi={worker.fi}
                    post={worker.post}
                    phone={worker.phone}
                    mail={worker.mail}
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
        workers: state.workers
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getInfo: (data) => dispatch(getInfo(data)),
        fetchData: (url) => dispatch(getAllWorkers(url))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkerList);
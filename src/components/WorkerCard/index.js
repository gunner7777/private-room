import React from 'react';
import { Link } from 'react-router-dom';
import './WorkerCard.css';
import 'font-awesome/css/font-awesome.min.css';


const WorkerCard = (props) => {
  const person = {
    id_worker: props.id,
    fi: props.fi,
    post: props.post,
    photo_link: props.photoLink,
    phone: props.phone,
    mail: props.mail
  }

  const photo = (props.photoLink !== undefined && props.photoLink.match(/.jpg/i)) ? <img className="WorkerCard-Avatar" src={props.photoLink} alt="worker" /> : <i className="WorkerCard-Icon fas fa-user"></i>;
  return (
    <div className="WorkerCard">
      <div className="WorkerCard-Img">
        {photo}
      </div>
      <div className="WorkerCard-Info">
        <h4 className="WorkerCard-Name">
          {props.fi}
        </h4>
        <p className="WorkerCard-Text">
          {props.post}
        </p>
        <p className="WorkerCard-Text">
          тел.: {props.phone}
        </p>
        <p className="WorkerCard-Text">
          e-mail: {props.mail}
        </p>
        <div className="WorkerCard-Controls">
          <Link
            to={`/workers/${props.id}/edit`}
            onClick={() => props.getInfo(person)}>
              <i className="fas fa-edit"></i>
          </Link>
          <span onClick={() => props.workerDel('http://теплофф.рф/tyryr/worker/delete.php', props.id)}>
            <i className="fas fa-trash-alt"></i>
          </span>
        </div>
      </div>
    </div>
  )
}

export default WorkerCard;
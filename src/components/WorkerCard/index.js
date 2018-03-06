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

  const photo = (props.photoLink !== undefined && props.photoLink.match(/.jpg/i)) ? <img src={props.photoLink} alt="worker" /> : <i class="fas fa-user"></i>;
  return (
    <div className="WorkerCard">
      <div className="WorkerCard-Img">
        {photo}
      </div>
      <div className="WorkerCard-Info">
        <p>
          {props.fi}
        </p>
        <p>
          {props.post}
        </p>
        <p>
          {props.phone}
        </p>
        <p>
          {props.mail}
        </p>
        <Link
          to={`/workers/${props.id}/edit`}
          onClick={() => props.getInfo(person)}>
            <i class="fas fa-edit"></i>
        </Link>
        <i class="fas fa-trash-alt"></i>
      </div>
    </div>
  )
}

export default WorkerCard;
import React from 'react';
import './WorkerCard.css';

const WorkerCard = (props) => {
  return (
    <div className="WorkerCard">
      <div className="WorkerCard-Img">
        <img src={props.photoLink} />
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
      </div>
    </div>
  )
}

export default WorkerCard;
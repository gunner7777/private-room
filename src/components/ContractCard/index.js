import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ContractCard.css';
import 'font-awesome/css/font-awesome.min.css';

const ContractCard = (props) => {
  return (
    <div className="ContactCard">
      <p>ID {props.id}</p>
      <p>Договор {props.name} от {props.date}</p>
      <p>Заказчик {props.fi_zakaz} {props.o_zakaz}</p>
      <p>Телефон {props.phone}</p>
      <p>Комментарии к договору</p>
      <p>{props.comments}</p>
      <div className="ContractCard-Controls">
          <Link
            to={`/contract/${props.id}/edit`}>
            {/*onClick={() => props.getInfo(person)}>*/}
              <i className="fas fa-edit"></i>
          </Link>
          <span>
          {/*<span onClick={() => props.workerDel('http://теплофф.рф/tyryr/worker/delete.php', props.id)}>*/}
            <i className="fas fa-trash-alt"></i>
          </span>
        </div>  
    </div>
  )
}

ContractCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  fi_zakaz: PropTypes.string.isRequired,
  o_zakaz: PropTypes.string,
  phone: PropTypes.string.isRequired,
  comments: PropTypes.string.isRequired
};

export default ContractCard;
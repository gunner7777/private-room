import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ContractCard.css';
import 'font-awesome/css/font-awesome.min.css';

const ContractCard = (props) => {
  return (
    <div className="ContractCard">
      {/*<p>ID {props.id}</p>*/}
      <div className="ContractCard-Title Title">
        <div className="Title-LeftSide"><i class="far fa-folder"></i></div>
        <div className="Title-RightSide">
          <h3 className="">Договор</h3>
          <p>{props.name} от {props.date}</p>
        </div>
      </div>
      {/*<h3 className="ContractCard-Line ContractCard-Line_Title"><strong>Договор:</strong> {props.name} от {props.date}</h3>*/}
      <p className="ContractCard-Line"><strong>Заказчик:</strong> {props.fi_zakaz} {props.o_zakaz}</p>
      <p className="ContractCard-Line"><strong>Телефон:</strong> {props.phone}</p>
      <p className="ContractCard-Line"><strong>Комментарии к договору:</strong></p>
      <p className="ContractCard-Line">{props.comments}</p>
      <div className="ContractCard-Controls">
          <Link
            to={`/contract/${props.id}/edit`}>
            {/*onClick={() => props.getInfo(person)}>*/}
              <i className="fas fa-edit ContractCard-Icon ContractCard-Icon_Update"></i>
          </Link>
          <span onClick={() => props.deleteThisContract(props.id)}>
          {/*<span onClick={() => props.workerDel('http://теплофф.рф/tyryr/worker/delete.php', props.id)}>*/}
            <i className="fas fa-trash-alt ContractCard-Icon ContractCard-Icon_Remove"></i>
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
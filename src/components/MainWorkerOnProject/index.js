import React from 'react';
import PropTypes from 'prop-types';
import './MainWorkerOnProject.css';

const MainWorkerOnProject = props => {
  return (
    <div className='MainWorker'>
      <h2 className='MainWorker-Title'>Ответственный за проект</h2>
      <div className='flexblock'>
        <div className='MainWorker-Photo'>
          <img src='http://теплофф.рф/upploaddds/cover.jpg' alt='main worker' />
        </div>
        <div className='MainWorker-Info'>
          <p>Вася Пупкин, медежер</p>
          <h3>Здравствуйте, Уважаемый заказчик!</h3>
          <p>
            Я ваш менеджер. Я отвечаю за то, чтобы процесс строительства прошел для вас максимально комфортно. По всем вопросом проекта обращайтесь ко мне.
          </p>
          <button>Заказать обратный звонок</button>
        </div>
      </div>
    </div>
  )
}

MainWorkerOnProject.propTypes = {
  
}

export default MainWorkerOnProject;
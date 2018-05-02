import React, { PropTypes } from 'react';

const MainWorkerOnProject = props => {
  return (
    <div>
      <h2>Ответственный за проект</h2>
      <div>
        <div>
          foto
        </div>
        <div>
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
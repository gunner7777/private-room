import React from 'react';
import PropTypes from 'prop-types'
import './WorkersProject.css';

const WorkersProject = props => {
  return (
    <div className='Container'>
      <h3>Обратная связь</h3>
      <div>
        <img src='http://теплофф.рф/upploaddds/cover.jpg' alt="worker" />
        <p>Вася Пупкин</p>
        <p>Менеджер</p>
        <p>тел 43-43-43</p>
        <p>mail@mail.ru</p>
      </div>
      <div>
        <img src='http://теплофф.рф/upploaddds/cover.jpg' alt="worker" />
        <p>петя баранкин</p>
        <p>Архитектор</p>
        <p>тел 43-43-43</p>
        <p>mail1@mail.ru</p>
      </div>
      <div>
        <img src='http://теплофф.рф/upploaddds/cover.jpg' alt="worker" />
        <p>Витя булкин</p>
        <p>Бригадир</p>
        <p>тел 43-43-43</p>
        <p>mail2@mail.ru</p>
      </div>
    </div>
  )
}

WorkersProject.propTypes = {
  
}

export default WorkersProject;
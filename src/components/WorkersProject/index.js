import React from 'react';
import PropTypes from 'prop-types';
import Title from '../Title';
import './WorkersProject.css';

const WorkersProject = props => {
  return (
    <div className='Container ComponentBlock'>
      <Title>Обратная связь</Title>
      <div className='WorkerProject-Outer flexblock'>
        <div className="WorkerProject flexblock">
          <div className="WorkerProject-Photo">
            <img src='http://теплофф.рф/upploaddds/cover.jpg' alt="worker" />
          </div>
          <div className="WorkerProject-Info">
            <p>Вася Пупкин</p>
            <p>Менеджер</p>
            <p>тел.: 43-43-43</p>
            <p>mail: mail@mail.ru</p>
          </div>
        </div>
        <div className="WorkerProject flexblock">
          <div className="WorkerProject-Photo">
            <img src='http://теплофф.рф/upploaddds/cover.jpg' alt="worker" />
          </div>
          <div className="WorkerProject-Info">
            <p>петя баранкин</p>
            <p>Архитектор</p>
            <p>тел.: 43-43-43</p>
            <p>mail: mail1@mail.ru</p>
          </div>
        </div>
        <div className="WorkerProject flexblock">
          <div className="WorkerProject-Photo">
            <img src='http://теплофф.рф/upploaddds/cover.jpg' alt="worker" />
          </div>
          <div className="WorkerProject-Info">
            <p>Витя булкин</p>
            <p>Бригадир</p>
            <p>тел.: 43-43-43</p>
            <p>mail: mail2@mail.ru</p>
          </div>
        </div>
        <div className="WorkerProject flexblock">
          <div className="WorkerProject-Photo">
            <img src='http://теплофф.рф/upploaddds/cover.jpg' alt="worker" />
          </div>
          <div className="WorkerProject-Info">
            <p>Витя булкин</p>
            <p>Бригадир</p>
            <p>тел.: 43-43-43</p>
            <p>mail: mail2@mail.ru</p>
          </div>
        </div>
      </div>
    </div>
  )
}

WorkersProject.propTypes = {
  
}

export default WorkersProject;
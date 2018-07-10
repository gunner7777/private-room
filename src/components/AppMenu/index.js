import React from 'react';
import AppMenuItem from './AppMenuItem';
import './AppMenu.css';

const AppMenu = () => {
  return (
    <ul className="AppMenu">
      <AppMenuItem alink="/">Главная</AppMenuItem>
      <AppMenuItem alink="/addContract">Новый договор</AppMenuItem>
      <AppMenuItem alink="/allContracts">Договоры</AppMenuItem>
      <AppMenuItem alink="/allWorkers">Работники</AppMenuItem>
      <AppMenuItem alink="/addWorker">Новый работник</AppMenuItem>   
    </ul>
  );
};

export default AppMenu;
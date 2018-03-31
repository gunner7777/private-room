import React from 'react';
import AppMenuItem from './AppMenuItem';
import './AppMenu.css';

const AppMenu = () => {
  return (
    <ul className="AppMenu">
      <AppMenuItem alink="/">Main</AppMenuItem>
      <AppMenuItem alink="/about">About</AppMenuItem>
      <AppMenuItem alink="/settings">Settings</AppMenuItem>
      <AppMenuItem alink="/addContract">New contract</AppMenuItem>
      <AppMenuItem alink="/allWorkers">All workers</AppMenuItem>
      <AppMenuItem alink="/addWorker">New worker</AppMenuItem>
      <AppMenuItem alink="/allContracts">All contracts</AppMenuItem>
      <AppMenuItem alink="/test">test</AppMenuItem>
    </ul>
  );
};

export default AppMenu;
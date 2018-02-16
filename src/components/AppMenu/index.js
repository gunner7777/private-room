import React from 'react';
import AppMenuItem from './AppMenuItem';
import './AppMenu.css';

const AppMenu = () => {
  return (
    <ul className="AppMenu">
      <AppMenuItem alink="/">Main</AppMenuItem>
      <AppMenuItem alink="/about">About</AppMenuItem>
      <AppMenuItem alink="/settings">Settings</AppMenuItem>
    </ul>
  );
};

export default AppMenu;
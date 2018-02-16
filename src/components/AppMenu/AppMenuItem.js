import React from 'react';
import { Link } from 'react-router-dom';
import './AppMenuItem.css';

const AppMenuItem = (props) => {
  return (
    <li className="AppMenu-Item">
      <Link to={props.alink}>{props.children}</Link>
    </li>
  );
};

export default AppMenuItem;
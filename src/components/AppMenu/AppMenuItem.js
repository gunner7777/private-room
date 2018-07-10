import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//import './AppMenuItem.css';

const AppMenuItem = (props) => {
  return (
    <li className="AppMenu-Item">
      <Link className="AppMenu-Link" to={props.alink}>{props.children}</Link>
    </li>
  );
};

AppMenuItem.propTypes = {
  alink: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
}

export default AppMenuItem;
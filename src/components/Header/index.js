import React from 'react';
import AppMenu from  '../AppMenu';
import './Header.css';

const Header = () => {
  return (
    <div className="Header flexblock">
      <img className="Header-Logo" src="http://xn--e1amjcnqa.xn--p1ai/templates/teploffcurrentmain/images/logo.png" alt="logo" />
      <AppMenu />
    </div>
  );
}

export default Header;
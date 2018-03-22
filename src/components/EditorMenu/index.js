import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const EditorMenu = () => {
  return (
    <div>
      <Link
        to="/common">
        Common info
      </Link>
      <Link
        to="/docs">
        Docs
      </Link>
      <Link
        to="/contract/:id?/edit/plan-rabot">
        Plan rabot
      </Link>
      <Link
        to="/contract/:id?/edit/payments">
        Payments
      </Link>
      <Link
        to="/contract/:id?/edit/workers">
        Workers
      </Link>
    </div>
  )
}

export default EditorMenu;
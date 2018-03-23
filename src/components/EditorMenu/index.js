import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const EditorMenu = (props) => {
  return (
    <div>
      <Link
        to={`/contract/${props.urlId}/edit`}>
        Home
      </Link>
      <Link
        to={`/contract/${props.urlId}/edit/common`}>
        Common info
      </Link>
      <Link
        to={`/contract/${props.urlId}/edit/docs`}>
        Docs
      </Link>
      <Link
        to={`/contract/${props.urlId}/edit/plan-rabot`}>
        Plan rabot
      </Link>
      <Link
        to={`/contract/${props.urlId}/edit/payments`}>
        Payments
      </Link>
      <Link
        to={`/contract/${props.urlId}/edit/workers`}>
        Workers
      </Link>
    </div>
  )
}

export default EditorMenu;
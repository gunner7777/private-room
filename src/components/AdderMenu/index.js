import React from 'react';
import { Link } from 'react-router-dom';

const EditorMenu = () => {
  return (
    <div>
      <Link
        to={`/addContract`}>
          Home
      </Link>
      <Link
        to={`/addContract/common`}>
          Common info
      </Link>
      <Link
        to={`/addContract/docs`}>
          Docs
      </Link>
      <Link
        to={`/addContract/plan-rabot`}>
          Plan rabot
      </Link>
      <Link
        to={`/addContract/payments`}>
          Payments
      </Link>
      <Link
        to={`/addContract/workers`}>
          Workers
      </Link>
    </div>
  )
}

export default EditorMenu;
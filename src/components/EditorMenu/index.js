import React from 'react';
import { Link } from 'react-router-dom';
import './EditorMenu.css';

const EditorMenu = (props) => {
  return (
    <div className="EditorMenu">
      {/*<Link className="EditorMenu-Item"
        to={`/contract/${props.urlId}/edit`}>
        Home
      </Link>*/}
      <Link className="EditorMenu-Item"
        to={`/contract/${props.urlId}/edit/common`}>
        Общая информация
      </Link>
      <Link className="EditorMenu-Item"
        to={`/contract/${props.urlId}/edit/docs`}>
        Документы
      </Link>
      <Link className="EditorMenu-Item"
        to={`/contract/${props.urlId}/edit/plan-rabot`}>
        План работ
      </Link>
      <Link className="EditorMenu-Item"
        to={`/contract/${props.urlId}/edit/payments`}>
        Платежи
      </Link>
      <Link className="EditorMenu-Item"
        to={`/contract/${props.urlId}/edit/workers`}>
        Работники
      </Link>
    </div>
  )
}

export default EditorMenu;
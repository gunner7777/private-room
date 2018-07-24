import React from 'react';
import { Link } from 'react-router-dom';
import './AdderMenu.css';

const EditorMenu = (props) => {

  const menu = props.links.map((l,index) => {
    return (
      l.disabled
        ? <p className="AdderMenu-Text">{l.text}</p>
        : <Link
            className="AdderMenu-Link"
            key={index}
            to={l.ssylka} >
              {l.text}
          </Link>
    )
  });

  return (
    <div className="AdderMenu">
      {menu}
    </div>
  )
}

export default EditorMenu;
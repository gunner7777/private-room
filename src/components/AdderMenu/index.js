import React from 'react';
import { Link } from 'react-router-dom';

const EditorMenu = (props) => {

  const menu = props.links.map((l,index) => {
    return (
      l.disabled
        ? <p>{l.text}</p>
        : <Link
            key={index}
            to={l.ssylka} >
              {l.text}
          </Link>
    )
  });
  console.log(menu);
  return (
    <div>
      {menu}
    </div>
  )
}

export default EditorMenu;
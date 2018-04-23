import React from 'react';
import { Link } from 'react-router-dom';

const EditorMenu = (props) => {
  /*let menu = [];
  for(let i=0; i<links.length; i++) {
    if(links[i].chapter !== props.chapter) {
      menu.push(links[i]);
    } else
      break;
  }
  console.log(menu);*/
  const menu = props.links.map(l => {
    return (
      <Link
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
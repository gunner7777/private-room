import React from 'react';
import { Link } from 'react-router-dom';

const links = [
  {
    ssylka: '/addContract',
    text: 'Home'
  },
  {
    ssylka: '/addContract/common',
    text: 'Common info'
  },
  {
    ssylka: '/addContract/docs',
    text: 'Docs'
  },
  {
    ssylka: '/addContract/plan-rabot',
    text: 'Plan rabot'
  },
  {
    ssylka: '/addContract/payments',
    text: 'Payments'
  },
  {
    ssylka: '/addContract/workers',
    text: 'Workers'
  }
];

const EditorMenu = () => {
  const menu = links.map(l => {
    return (
      <Link
      to={l.ssylka} >
        {l.text}
      </Link>
    )
  });
  return (
    <div>
      {menu}
    </div>
  )
}

export default EditorMenu;
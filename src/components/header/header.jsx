import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

import logo from '../../images/logoBlack.svg';
import iconBack from '../../images/iconArrowLeft.svg';

export default function Header(){
  return(
    <div className="headerContainer">
      <Link to="/" className="linkContainer">
        <img src={iconBack} alt="Back to the homepage" />
        <span>Home</span>
      </Link>
      <Link to="/">
        <img src={logo} alt="Makersmodo" className="headerLogo"/>
      </Link>
    </div>
  )
}
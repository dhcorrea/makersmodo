import React from 'react';
import { Link } from 'react-router-dom';

import './headerFull.css';

import Button from '../../components/buttonLarge/buttonLarge';

import logo from '../../images/logoBlack.svg';
import iconBack from '../../images/iconArrowLeft.svg';

export default function HeaderFull(){
  return(
    <div className="headerFullContainer">
      <Link to="/" className="linkFullContainer">
        <img src={iconBack} alt="Back to the homepage" />
        <span>Home</span>
      </Link>

      <Link to="/">
        <img src={logo} alt="Makersmodo" className="headerFullLogo"/>
      </Link>

      <div className="headerFullButton">
        <Button btnLabel="Find your co-founder" />
      </div> 
    </div>
  )
}
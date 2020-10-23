import React from 'react';
import { Link } from 'react-router-dom';

import './linkBack.css';

import iconBack from '../../images/iconArrowLeft.svg';

export default function LinkBack() {
  return(
    <Link to="/" className="linkContainer">
      <img src={iconBack} alt="Back to the homepage" />
      <span>Home</span>
    </Link>
  )
}
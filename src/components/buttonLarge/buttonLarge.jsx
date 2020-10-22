import React from 'react';
import { Link } from 'react-router-dom';

import './buttonLarge.css';

export default function ButtonPrimaryLarge(props){
  return(
    <Link to="/project-register">
      <button className="buttonLarge">{props.btnLabel}</button>
    </Link> 
  )
}
import React from 'react';

import './buttonLarge.css';

export default function ButtonPrimaryLarge(props){
  return(
    <button className="buttonLarge">{props.btnLabel}</button>
  )
}
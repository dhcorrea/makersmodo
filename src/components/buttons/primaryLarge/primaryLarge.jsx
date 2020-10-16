import React from 'react';

import './primaryLarge.scss';

export default function ButtonPrimaryLarge(props){
  return(
    <button className="buttonPrimaryLarge">{props.btnLabel}</button>
  )
}
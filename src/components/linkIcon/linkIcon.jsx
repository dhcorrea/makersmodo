import React from 'react';

import './linkIcon.css';

import arrow from '../../images/arrowIcon.svg';

export default function LinkIcon(props){
  return(
    <div className="link">
      <span>{props.linkName}</span>
      <img src={arrow} alt="Details Icon" className="linkIcon"/>
    </div>
  )
}
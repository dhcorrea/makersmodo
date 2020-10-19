import React from 'react';

import './linkIcon.scss';

import arrow from '../../images/arrowIcon.svg';

export default function LinkIcon(props){
  return(
    <a href="google.com" className="link">
      {props.linkName}
      <img src={arrow} alt="Details Icon" className="link__icon"/>
    </a>
  )
}
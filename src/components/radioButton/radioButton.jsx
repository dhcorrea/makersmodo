import React from 'react';

import './radioButton.scss';

export default function RadioButton(props){
  return(
    <label className="radioContainer">
      <input type="radio" name="radioOptions" value={props.itemValue}/>
      <img className="radioContainer__icon" src={props.itemIcon} alt={`${props.itemLabel} filter`}/>
      <span className="radioContainer__label">{props.itemLabel}</span>
    </label>
  )
}
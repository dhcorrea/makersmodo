import React from 'react';

import './filterList.scss';

export default function FilterList(){
  return(
    <React.Fragment>
      <label className="radioContainer">
        <input type="radio" name="radioOptions" value="allNeeds"/>
        <span className="radioContainer__iconFilter radioContainer__iconAllNeeds"></span>
        <span className="radioContainer__label">All needs</span>
      </label>

      <label className="radioContainer">
        <input type="radio" name="radioOptions" value="programming"/>
        <span className="radioContainer__iconFilter radioContainer__iconProgramming"></span>
        <span className="radioContainer__label">Programming</span>
      </label>

      <label className="radioContainer">
        <input type="radio" name="radioOptions" value="design"/>
        <span className="radioContainer__iconFilter radioContainer__iconDesign"></span>
        <span className="radioContainer__label">Design</span>
      </label>

      <label className="radioContainer">
        <input type="radio" name="radioOptions" value="marketing"/>
        <span className="radioContainer__iconFilter radioContainer__iconMarketing"></span>
        <span className="radioContainer__label">Marketing</span>
      </label>

      <label className="radioContainer">
        <input type="radio" name="radioOptions" value="business"/>
        <span className="radioContainer__iconFilter radioContainer__iconBusiness"></span>
        <span className="radioContainer__label">Business</span>
      </label>
    </React.Fragment>
  )
}
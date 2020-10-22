import React from 'react';

import './filterList.css';

export default function FilterList(){
  return(
    <div className="radioWrapper">
      <label className="radioContainer">
        <input type="radio" name="radioOptions" value="allNeeds" defaultChecked/>
        <span className="iconFilter iconAllNeeds"></span>
        <span className="filterLabel">All needs</span>
      </label>

      <label className="radioContainer">
        <input type="radio" name="radioOptions" value="programming"/>
        <span className="iconFilter iconProgramming"></span>
        <span className="filterLabel">Programming</span>
      </label>

      <label className="radioContainer">
        <input type="radio" name="radioOptions" value="design"/>
        <span className="iconFilter iconDesign"></span>
        <span className="filterLabel">Design</span>
      </label>

      <label className="radioContainer">
        <input type="radio" name="radioOptions" value="marketing"/>
        <span className="iconFilter iconMarketing"></span>
        <span className="filterLabel">Marketing</span>
      </label>

      <label className="radioContainer">
        <input type="radio" name="radioOptions" value="business"/>
        <span className="iconFilter iconBusiness"></span>
        <span className="filterLabel">Business</span>
      </label>
    </div>
  )
}
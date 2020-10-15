import React from 'react';

import './home.scss';

import Header from '../../components/header/header';

export default function Home() {
  return(
    <React.Fragment>
      <Header />
      <section className="homeContent">
        <div className="filters">
          <div className="radio">
            <input type="radio" name="allNeeds" id="allNeeds"/>
            <label>All needs</label>
          </div>
          <div className="radio">
            <input type="radio" name="programming" id="programming"/>
            <label>Programming</label>
          </div>
          <div className="radio">
            <input type="radio" name="design" id="design"/>
            <label>Design</label>
          </div>
          <div className="radio">
            <input type="radio" name="marketing" id="marketing"/>
            <label>Marketing</label>
          </div>
          <div className="radio">
            <input type="radio" name="business" id="business"/>
            <label>Business</label>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}
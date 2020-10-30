import React from 'react';

import './projectRegister.css';

import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

import iconFire from '../../images/iconFire.png';
import iconCheck from '../../images/iconCheck.svg';

export default function ProjectRegister(){
  return(
    <React.Fragment>
      <Header />

      <div className="registerContainer">
        <div className="postValue">
          <span>$ 29</span>
          <div className="textContainer">
            <p>Enjoy the <strong>promocional</strong> price</p>
          </div>
        </div>

        <div className="formTitle">
          <h3>Set the data to find your co-founder</h3>
          <img src={iconFire} alt="form icon" />
        </div>
        
        <form>
          <div className="formUpload"></div>

          <div className="formFirstLine">
            <div className="formTextField">
              <label>Your first name</label>
              <input type="text" className="formFirstName" placeholder="Ex.: Steve"/>
            </div>
            <div className="formTextField">
              <label>Your last name</label>
              <input type="text" placeholder="Ex.: Jobs"/>
            </div>
          </div>

          <div className="formTextField formMarginTop">
              <label>Your best email</label>
              <input type="text" placeholder="Ex.: stevejobs@apple.com"/>
          </div>

          <div className="formCheckboxWrapper">
            <h3>Set the types of co-founders you need</h3>
            <ul className="checkboxContainer">
              <li className="checkboxItem">
                <input type="checkbox" id="programming" value="programming"/>
                <label for="programming">Programming</label>
                <img src={iconCheck} alt="Icon check" className="iconCheck"/>
              </li>
              <li className="checkboxItem">
                <input type="checkbox" id="design" value="design"/>
                <label for="design">Design</label>
                <img src={iconCheck} alt="Icon check" className="iconCheck"/>
              </li>
              <li className="checkboxItem">
                <input type="checkbox" id="marketing" value="marketing"/>
                <label for="marketing">Marketing</label>
                <img src={iconCheck} alt="Icon check" className="iconCheck"/>
              </li>
              <li className="checkboxItem">
                <input type="checkbox" id="business" value="business"/>
                <label for="business">Business</label>
                <img src={iconCheck} alt="Icon check" className="iconCheck"/>
              </li>
            </ul>
          </div>
          
        </form>
      </div>

      <Footer />
    </React.Fragment>
  )
}
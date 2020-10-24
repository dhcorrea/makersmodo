import React from 'react';

import './projectRegister.css';

import Header from '../../components/header/header';

import iconParty from '../../images/iconParty.png';

export default function ProjectRegister(){
  return(
    <React.Fragment>
      <Header />

      <div className="registerContainer">
        <div className="postValue">
          <span>$ 29</span>
          <div className="textContainer">
            <p>Enjoy the <strong>promocional</strong> price</p>
            <img src={iconParty} alt="party icon" />
          </div>
        </div>

        <form>
          <div className="formGroup"></div>
        </form>
      </div>
    </React.Fragment>
  )
}
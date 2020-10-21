import React from 'react';

import './footer.css';

import logo from '../../images/logoBlack.svg';
import twitter from '../../images/twitterIcon.svg';
import instagram from '../../images/InstagramIcon.svg';

export default function Footer(){
  return(
    <div className="footer">
      <div className="footerContent">
        <img src={logo} alt="makersmodo logo" className="footerLogo"/>
        <div className="footerSocial">
          <a href="https://twitter.com/makersmodo" target="_blank" rel="noopener noreferrer">
            <img src={twitter} alt="Makersmodo Twitter" />
          </a>
          <a href="https://www.instagram.com/makersmodo/" target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt="Makersmodo Instagram" />
          </a>
        </div>
      </div>
    </div>
  )
}
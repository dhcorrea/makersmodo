import React from 'react';

import './footer.scss';

import logo from '../../images/logoBlack.svg';
import twitter from '../../images/twitterIcon.svg';
import instagram from '../../images/InstagramIcon.svg';

export default function Footer(){
  return(
    <div className="footer">
      <div className="footer__content">
        <img src={logo} alt="makersmodo logo" className="footer__logo"/>
        <div className="footer__social">
          <a href="https://twitter.com/makersmodo" target="_blank" rel="noopener noreferrer">
            <img src={twitter} alt="makersmodo Twitter" />
          </a>
          <a href="https://www.instagram.com/makersmodo/" target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt="makersmodo Instagram" />
          </a>
        </div>
      </div>
      
    </div>
  )
}
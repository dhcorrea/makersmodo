import React from 'react';

import './hero.css'
import Logo from '../../images/logoWhite.svg';

export default function Hero() {
  return(
    <section className="hero">
      <img src={Logo} alt="Makersmodo" className="heroLogo"/>
      <div className="heroContent">
        <h1 className="heroTitle">
          Post. Find your <span>co-founder.</span> Build your dream business.
        </h1>
        <p className="heroParagraph">
          Do you have a great idea but need a <span>programmer</span>, <span>designer</span>, <span>marketing</span> or <span>business</span> person to get there? Post and meet all here.
        </p>
      </div>
    </section>
  )
}
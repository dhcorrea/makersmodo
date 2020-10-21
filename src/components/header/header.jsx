import React from 'react';

import './header.css'
import Logo from '../../images/logoWhite.svg';

export default function Header() {
  return(
    <section className="header">
      <img src={Logo} alt="Makersmodo" className="headerLogo"/>
      <div className="headerContent">
        <h1 className="headerTitle">
          Post. Find your <span>co-founder.</span> Build your dream business.
        </h1>
        <p className="headerParagraph">
          Do you have a great idea but need a <span>programmer</span>, <span>designer</span>, <span>marketing</span> or <span>business</span> person to get there? Post and meet all here.
        </p>
      </div>
    </section>
  )
}
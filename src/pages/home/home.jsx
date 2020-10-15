import React from 'react';

import './home.scss'
import Logo from '../../images/logoWhite.svg';

export default function Home() {
  return(
    <section className="header">
      <img src={Logo} alt="Makersmodo" className="header__logo"/>
      <div className="header__content">
        <h1 className="header__title">
          Post, find your <span>co-founder</span> & build your dream business.
        </h1>
        <p className="header__paragraph">
          Do you have a great idea but need a <span>programmer</span>, <span>designer</span>, <span>marketing</span> or <span>business</span> person to get there? Post and meet all here.
        </p>
      </div>
    </section>
  )
}
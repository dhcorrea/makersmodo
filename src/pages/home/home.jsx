import React from 'react';

import './home.scss';

import Header from '../../components/header/header';
import RadioButton from '../../components/radioButton/radioButton';
import ButtonPrimaryLarge from '../../components/buttons/primaryLarge/primaryLarge'

import allNeeds from '../../images/allNeeds.png';
import programming from '../../images/programming.png';
import design from '../../images/design.png';
import marketing from '../../images/marketing.png';
import business from '../../images/business.png';

export default function Home() {
  return(
    <React.Fragment>
      <Header />
      <section className="homeContent">
        <div className="homeContent__wrap">
          <aside className="homeContent__filter">
            <RadioButton itemLabel="All needs" itemIcon={allNeeds} itemValue="allNeeds"/>
            <RadioButton itemLabel="Programming" itemIcon={programming} itemValue="programming"/>
            <RadioButton itemLabel="Design" itemIcon={design} itemValue="design"/>
            <RadioButton itemLabel="Marketing" itemIcon={marketing} itemValue="marketing"/>
            <RadioButton itemLabel="Business" itemIcon={business} itemValue="business"/>
          </aside>

          <section className="homeContent__list">
            <div className="homeContent__listHeader">
              <h1><span>280 project ideas</span> to you be a co-founder:</h1>
              <ButtonPrimaryLarge btnLabel="Find your co-founder"/>
            </div>
          </section>
        </div>
      </section>
    </React.Fragment>
  )
}
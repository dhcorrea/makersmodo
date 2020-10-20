import React from 'react';

import './home.scss';

import Header from '../../components/header/header';
import FilterList from '../../components/filterList/filterList';
import ButtonPrimaryLarge from '../../components/buttons/primaryLarge/primaryLarge';
import ProjectCard from '../../components/projectCard/projectCard';
import Footer from '../../components/footer/footer';

export default function Home() {
  return(
    <React.Fragment>
      <Header />
      <section className="homeContent">
        <div className="homeContent__wrap">
          <aside className="homeContent__filter">
            <FilterList/>
          </aside>
          <section className="homeContent__list">
            <div className="homeContent__listHeader">
              <h1><span>280 project ideas</span> to you be a co-founder:</h1>
              <ButtonPrimaryLarge btnLabel="Find your co-founder"/>
            </div>
            <div className="homeContent__projectList">
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
            </div> 
          </section>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  )
}
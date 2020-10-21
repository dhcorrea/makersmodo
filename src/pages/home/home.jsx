import React from 'react';

import './home.css';

import Header from '../../components/header/header';
import FilterList from '../../components/filterList/filterList';
import ButtonLarge from '../../components/buttonLarge/buttonLarge';
import ProjectCard from '../../components/projectCard/projectCard';
import Footer from '../../components/footer/footer';

export default function Home() {
  return(
    <React.Fragment>
      <Header />
      <section className="homeContent">
        <div className="homeContentWrap">
          <aside className="homeContentFilter">
            <FilterList/>
          </aside>
          <section className="homeContentList">
            <div className="homeContentListHeader">
              <h1><span>280 project ideas</span> to you be a co-founder:</h1>
              <ButtonLarge btnLabel="Find your co-founder"/>
            </div>
            <div className="homeContentProjectList">
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
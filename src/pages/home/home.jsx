import React, { useState, useEffect } from 'react';

import './home.css';

import firebase from "../../config/firebase"

import Hero from '../../components/hero/hero';
import FilterList from '../../components/filterList/filterList';
import ButtonLarge from '../../components/buttonLarge/buttonLarge';
import ProjectCard from '../../components/projectCard/projectCard';
import Footer from '../../components/footer/footer';

export default function Home() {
  const [projects, setProjects] = useState([]);
  let projectList = [];

  useEffect(() => {
    firebase.firestore().collection("projetos").get().then(async(result) => {
      await result.docs.forEach(doc => {
        projectList.push({
          id: doc.id,
          ...doc.data()
        })
      })
      setProjects(projectList);
    })
  });

  return(
    <React.Fragment>
      <Hero />
      <section className="homeContent">
        <div className="homeContentWrap">
          <aside className="homeContentFilter">
            <FilterList/>
          </aside>
          <section className="homeContentList">
            <div className="homeContentListHeader">
              <h1 className="homeContentListHeading">
                <span>+280 project ideas</span> to you be a co-founder:
              </h1> 
              <ButtonLarge btnLabel="Find your co-founder"/>
            </div>
            <div className="homeContentProjectList">
              <projectCard />
              { projects.map(item => 
                  <ProjectCard 
                    key={item.id}
                    id={item.id}
                    avatar={item.avatar}
                    firstName={item.firstName}
                    lastName={item.lastName}
                    aboutUser={item.aboutUser}
                    aboutProject={item.aboutProject}
                    needProgramming={item.needProgramming}
                    needDesign={item.needDesign}
                    needMarketing={item.needMarketing}
                    needBusiness={item.needBusiness}
                  />) 
              }
            </div> 
          </section>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  )
}
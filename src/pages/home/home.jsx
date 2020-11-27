import React, { useState, useEffect } from 'react';

import './home.css';

import firebase from "../../config/firebase"

import Hero from '../../components/hero/hero';
import ButtonLarge from '../../components/buttonLarge/buttonLarge';
import ProjectCard from '../../components/projectCard/projectCard';
import Footer from '../../components/footer/footer';

export default function Home() {
  const [projects, setProjects] = useState([]);
  const [filters, setFilters] = useState("all");
  const ref = firebase.firestore().collection("projetos");

  function getProjects(){
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push({
          id: doc.id,
          ...doc.data()
        })
      });
      setProjects(items);
    })
  }

  /*const updateFilters = e => {
    const value = e.target.value;
    //let filterValue;
    setFilters(value)
  }*/

  useEffect(() => {
    getProjects();
    //updateFilters();
  });


  return(
    <React.Fragment>
      <Hero />
      <section className="homeContent">
        <div className="homeContentWrap">
          <aside className="homeContentFilter">
            <div className="radioWrapper">
              <label className="radioContainer">
                <input type="radio" name="needs" value="allNeeds" checked={filters === "all"} onChange={(e) => setFilters(e.target.value)}/>
                <span className="iconFilter iconAllNeeds"></span>
                <span className="filterLabel">All needs</span>
              </label>
              
              <label className="radioContainer">
                <input type="radio" name="needs" value="programming" checked={filters === "programming"} onChange={(e) => setFilters(e.target.value)}/>
                <span className="iconFilter iconProgramming"></span>
                <span className="filterLabel">Programming</span>
              </label>
        
              <label className="radioContainer">
                <input type="radio" name="needs" value="design" checked={filters === "design"} onChange={(e) => setFilters(e.target.value)}/>
                <span className="iconFilter iconDesign"></span>
                <span className="filterLabel">Design</span>
              </label>
        
              <label className="radioContainer">
                <input type="radio" name="needs" value="marketing" checked={filters === "marketing"} onChange={(e) => setFilters(e.target.value)}/>
                <span className="iconFilter iconMarketing"></span>
                <span className="filterLabel">Marketing</span>
              </label>
        
              <label className="radioContainer">
                <input type="radio" name="needs" value="business" checked={filters === "business"} onChange={(e) => setFilters(e.target.value)}/>
                <span className="iconFilter iconBusiness"></span>
                <span className="filterLabel">Business</span>
              </label>
          </div>
          </aside>
          <section className="homeContentList">
            <div className="homeContentListHeader">
              <h1 className="homeContentListHeading">
                <span>+280 project ideas</span> to you be a co-founder:
              </h1> 
              <ButtonLarge btnLabel="Find your co-founder"/>
            </div>
            <div className="homeContentProjectList">
              { projects.map((item) => (
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
                />))}
            </div> 
          </section>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  )
}
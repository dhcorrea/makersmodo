import React, { useState, useEffect } from 'react';

import './projectDetails.css';

import firebase from '../../config/firebase';

import iconFire from '../../images/iconFire.png';

import Tag from '../../components/tag/tag';
import HeaderFull from '../../components/headerFull/headerFull';
import Footer from '../../components/footer/footer';

export default function ProjectDetails(props){
  const [project, setProject] = useState({});
  const [urlImage, setUrlImage] = useState({});

  useEffect(() => {
    firebase.firestore().collection("projetos").doc(props.match.params.id).get().then(result => {
      setProject(result.data())
      firebase.storage().ref(`images/${result.data().avatar}`).getDownloadURL().then(url => setUrlImage(url))
    })
  })

  return(
    <React.Fragment>
      <HeaderFull />

      <div className="projectWrapper">
        <div className="titleContent">
          <h1>Post details</h1>
          <img src={iconFire} alt="Fire icon" />
        </div>
        
        <div className="projectContent">
          <div className="userContainer">
            <img src={urlImage} alt="User" className="userPhoto"/>
            <span className="userName">{project.firstName} {project.lastName}</span>
          </div>

          <div className="userNeeds">
            <span className="userNeedsLabel">{project.firstName}'s needs:</span>
            <div className="tagContainer">
              <Tag tagName={project.needProgramming}/>
              <Tag tagName={project.needDesign}/>
              <Tag tagName={project.needMarketing}/>
              <Tag tagName={project.needBusiness}/>
            </div>
          </div>

          <div className="projectText">
            <h3 className="textTitle">About the project</h3>
            <p className="textParagraph">{project.aboutProject}</p>
          </div>

          <div className="projectText">
            <h3 className="textTitle">About {project.firstName}</h3>
            <p className="textParagraph">{project.aboutUser}</p>
          </div>

          <div className="userContact">
            <h3 className="textTitle">Are you interested? Contact {project.firstName}</h3>
            <p className="userEmail">{project.email}</p>
          </div>
        </div>
      </div>

      <Footer />
    </React.Fragment>
  )
}
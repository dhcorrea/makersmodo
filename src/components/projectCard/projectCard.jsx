import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './projectCard.css';

import firebase from "../../config/firebase";

import Tag from '../../components/tag/tag';
import LinkIcon from '../../components/linkIcon/linkIcon';

export default function ProjectCard({id, avatar, firstName, lastName, aboutUser, aboutProject, needProgramming, needDesign, needMarketing, needBusiness}){
  const [urlImage, setUrlImage] = useState(null);

  useEffect(() => {
    firebase.storage().ref(`images/${avatar}`).getDownloadURL().then(url => setUrlImage(url))    
  }, [urlImage])

  return(
    <Link to={"/project-details/" + id}>
      <div className="projectCard">
        <div className="projectCardUser">
          <img src={urlImage} alt="user"/>
          <span>{firstName} {lastName}</span>
        </div>
        <h3>{aboutProject}</h3>
        <p>{aboutUser}</p>
        <div className="projectCardFooter">
          <div className="projectCardTagsFilter">
            <h6>{firstName}'s needs:</h6>
            <div className="projectCardTagContainer">
              <Tag tagName={needProgramming}/>
              <Tag tagName={needDesign}/>
              <Tag tagName={needMarketing}/>
              <Tag tagName={needBusiness}/>
            </div>
          </div>
          <LinkIcon linkName="Details"/>
        </div>
      </div>
    </Link>
  )
}
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './projectCard.css';

import firebase from "../../config/firebase";

import Tag from '../../components/tag/tag';
import LinkIcon from '../../components/linkIcon/linkIcon';

export default function ProjectCard(id, avatar, firstName, lastName, aboutUser, aboutProject){
  const [urlImage, setUrlImage] = useState();

  useEffect(() => {
    firebase.storage().ref(`images/${avatar}`).getDownloadURL().then(url => setUrlImage(url))    
  }, [urlImage])

  return(
    <Link to={"/project-details/" + id}>
      <div className="projectCard">
        <div className="projectCardUser">
          <img src={urlImage} alt="user"/>
          <span>{firstName} + {lastName}</span>
        </div>
        <h3>{aboutUser}</h3>
        <p>{aboutProject}</p>
        <div className="projectCardFooter">
          <div className="projectCardTagsFilter">
            <h6>Laura's needs:</h6>
            <div className="projectCardTagContainer">
              <Tag tagName="#Design"/>
              <Tag tagName="#Programming"/>
              <Tag tagName="#Marketing"/>
            </div>
          </div>
          <LinkIcon linkName="Details"/>
        </div>
      </div>
    </Link>
  )
}
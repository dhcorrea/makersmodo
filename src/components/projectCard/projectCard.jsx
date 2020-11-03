import React from 'react';
import { Link } from 'react-router-dom';

import './projectCard.css';

import photoUser from '../../images/userphoto.jpg';

import Tag from '../../components/tag/tag';
import LinkIcon from '../../components/linkIcon/linkIcon';

export default function ProjectCard(){
  return(
    <Link to="/project-details/">
      <div className="projectCard">
        <div className="projectCardUser">
          <img src={photoUser} alt="user"/>
          <span>Laura Magalhães</span>
        </div>
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor labour</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo exercitati</p>
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
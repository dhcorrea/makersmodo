import React from 'react';

import './projectDetails.css';

import iconFire from '../../images/iconFire.png';
import photoUser from '../../images/userphoto.jpg';

import Tag from '../../components/tag/tag';
import HeaderFull from '../../components/headerFull/headerFull';
import Footer from '../../components/footer/footer';

export default function projectDetails(){
  return(
    <React.Fragment>
      <HeaderFull />

      <div className="projectWrapper">
        <div className="titleContent">
          <h1 className>Laura's post details</h1>
          <img src={iconFire} alt="Fire icon" />
        </div>
        
        <div className="projectContent">
          <div className="userContainer">
            <img src={photoUser} alt="User" className="userPhoto"/>
            <span className="userName">Laura Magalhães</span>
          </div>

          <div className="userNeeds">
            <span className="userNeedsLabel">Laura's needs:</span>
            <div className="tagContainer">
              <Tag tagName="#Design"/>
              <Tag tagName="#Programming"/>
              <Tag tagName="#Marketing"/>
              <Tag tagName="#Business"/>
            </div>
          </div>

          <div className="projectText">
            <h3 className="textTitle">About the project</h3>
            <p className="textParagraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
          </div>

          <div className="projectText">
            <h3 className="textTitle">About Laura</h3>
            <p className="textParagraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
          </div>

          <div className="userContact">
            <h3 className="textTitle">Are you interested? Contact Laura</h3>
            <p className="userEmail">laura@gmail.com</p>
          </div>
        </div>
      </div>

      <Footer />
    </React.Fragment>
  )
}
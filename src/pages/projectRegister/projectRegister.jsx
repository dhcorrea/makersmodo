import React, { useState } from 'react';
import firebase from '../../config/firebase';

import './projectRegister.css';

import HeaderClean from '../../components/headerClean/headerClean';
import Footer from '../../components/footer/footer';

import iconFire from '../../images/iconFire.png';
import iconCheck from '../../images/iconCheck.svg';
import iconAvatar from '../../images/iconAvatar.svg';
import iconSad from '../../images/sadFace.png';
import iconInLove from '../../images/iconInLove.png';

export default function ProjectRegister(){

  const [avatar, setAvatar] = useState()
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [needProgramming, setNeedProgramming] = useState(null)
  const [needDesign, setNeedDesign] = useState(null)
  const [needMarketing, setNeedMarketing] = useState(null)
  const [needBusiness, setNeedBusiness] = useState(null)
  const [aboutUser, setAboutUser] = useState("")
  const [aboutProject, setAboutProject] = useState("")
  const [message, setMessage] = useState() 

  const storage = firebase.storage()
  const db = firebase.firestore()

  const [enviandoDados, setEnviandoDados] = useState()
  
  function register(){
    setEnviandoDados(1)
    setMessage(null)

    storage.ref(`images/${avatar.name}`).put(avatar).then(() => {
      db.collection('projetos').add({
        firstName:firstName,
        lastName:lastName,
        email:email,
        needProgramming:needProgramming,
        needDesign:needDesign,
        needMarketing:needMarketing,
        needBusiness:needBusiness,
        aboutUser:aboutUser,
        aboutProject:aboutProject,
        avatar:avatar.name,
        views:0,
        creation: new Date()
      }).then(() => {
        setEnviandoDados(0)
        setMessage("sucesso")
      }).catch(erro => {
        setEnviandoDados(0)
        setMessage("erro")
      })
    })
  }

  return(
    <React.Fragment>
      <HeaderClean />

      <div className="registerContainer">
        <div className="postValue">
          <span>$ 29</span>
          <div className="textContainer">
            <p>Enjoy the <strong>promocional</strong> price</p>
          </div>
        </div>

        <div className="formTitle">
          <h3>Set the data to find your co-founder</h3>
          <img src={iconFire} alt="form icon" />
        </div>
        
        <form>
          <label htmlFor="avatar" className="formUpload">
            <img src={iconAvatar} alt="Avatar Icon" />
            <input
              onChange={(e) => setAvatar(e.target.files[0])}
              type="file" 
              id="avatar" 
              name="avatar" 
              accept="image/*"
            />
            {
              avatar ? 
                <div className="photoSentContainer">
                  <span className="photoSent">Photo sent</span>
                  <img src={iconInLove} alt="Icon in love" className="inLoveIcon"/>
                </div> :
                <span>Upload your photo</span>
            }
          </label>

          <div className="formFirstLine">
            <div className="formTextField">
              <label>Your first name</label>
              <input
                type="text" 
                className="formFirstName" 
                placeholder="Ex.: Steve"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)} 
              />
            </div>
            <div className="formTextField formTextFieldLasName">
              <label>Your last name</label>
              <input 
                type="text" 
                placeholder="Ex.: Jobs"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>

          <div className="formTextField formMarginTop">
              <label>Your best email</label>
              <input
                type="text" 
                placeholder="Ex.: stevejobs@apple.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
          </div>

          <div className="formCheckboxWrapper">
            <h3>Set the types of co-founders you need</h3>
            <ul className="checkboxContainer">
              <li className="checkboxItem">
                <input 
                  type="checkbox" 
                  id="programming" 
                  value="#Programming"
                  onChange={(e) => setNeedProgramming(e.target.value)}
                />
                <label htmlFor="programming">Programming</label>
                <img src={iconCheck} alt="Icon check" className="iconCheck"/>
              </li>
              <li className="checkboxItem">
                <input
                  type="checkbox" 
                  id="design" 
                  value="#Design"
                  onChange={(e) => setNeedDesign(e.target.value)}
                />
                <label htmlFor="design">Design</label>
                <img src={iconCheck} alt="Icon check" className="iconCheck"/>
              </li>
              <li className="checkboxItem">
                <input
                  type="checkbox" 
                  id="marketing" 
                  value="#Marketing"
                  onChange={(e) => setNeedMarketing(e.target.value)}
                />
                <label htmlFor="marketing">Marketing</label>
                <img src={iconCheck} alt="Icon check" className="iconCheck"/>
              </li>
              <li className="checkboxItem">
                <input
                  type="checkbox" 
                  id="business" 
                  value="#Business"
                  onChange={(e) => setNeedBusiness(e.target.value)}
                />
                <label htmlFor="business">Business</label>
                <img src={iconCheck} alt="Icon check" className="iconCheck"/>
              </li>
            </ul>
          </div>

          <div className="formTextArea">
            <div className="labelContainer">
              <label htmlFor="textarea" className="textAreaLabel">Tell a little bit about you</label>
              <label htmlFor="textarea" className="textAreaSubLabel">Sell yourself. Your future co-founder want to know about you</label>
            </div>
            <textarea
              className="textArea"
              id="textarea"
              placeholder="Don't be shy"
              value={aboutUser}
              onChange={(e) => setAboutUser(e.target.value)}>
              
            </textarea>
          </div>

          <div className="formTextArea">
            <div className="labelContainer">
              <label htmlFor="textarea" className="textAreaLabel">Tell a little bit about your project</label>
              <label htmlFor="textarea" className="textAreaSubLabel">Sell the idea for your future co-founder</label>
            </div>
            <textarea
              className="textArea" 
              id="textarea" 
              placeholder="Don't be shy"
              value={aboutProject}
              onChange={(e) => setAboutProject(e.target.value)}>
            </textarea>
          </div>

          { 
            message === "erro" &&
            <div className="msgErroContainer">
              <span className="msgErro">Sorry ma friend. Check all the fields and try again</span>
              <img src={iconSad} className="msgErroIcon" alt="Bad" />
            </div>
          }

          { 
            message === "success" &&
            <div className="msgErroContainer">
              <span className="msgErro">Hell yeah! Project registered</span>
              <img src={iconFire} className="msgErroIcon" alt="Bad" />
            </div>
          }
          
          {
            enviandoDados > 0 ?
            <span className="buttonFormDisable">Sending your data ...</span> 
            :
            <button
              onClick={register} 
              type="button" 
              className="buttonFormPrimary">
              Find my co-founder
            </button>
          }
          
        </form>
      </div>

      <Footer />
    </React.Fragment>
  )
}
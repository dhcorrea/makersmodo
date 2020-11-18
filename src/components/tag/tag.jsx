import React from 'react';

import './tag.css';

export default function Tag({tagName}){
  let tagBg;

  if(tagName !== null){
    tagBg = true
  }

  return(
    <h6 className={`tag ${tagBg ? "tagBg" : "tagNoBg" }`}>{tagName}</h6>
  )
}
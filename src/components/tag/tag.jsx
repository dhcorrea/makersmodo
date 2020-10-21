import React from 'react';

import './tag.css';

export default function Tag(props){
  return(
    <h6 className="tag">{props.tagName}</h6>
  )
}
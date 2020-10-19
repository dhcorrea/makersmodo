import React from 'react';

import './tag.scss';

export default function Tag(props){
  return(
    <h6 className="tag">{props.tagName}</h6>
  )
}
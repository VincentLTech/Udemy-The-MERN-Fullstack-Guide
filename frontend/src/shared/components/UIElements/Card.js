import React from 'react';//8
import './Card.css';//8
const Card = props => {
  return (
    <div className={`card ${props.className}`} style={props.style}>{/* 8*/}
      {props.children}{/* 8*/}
    </div>//8
  );
};

export default Card;

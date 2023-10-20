import React from 'react';

import './Avatar.css';

const Avatar = props => {{/* 8*/}
  return (
    <div className={`avatar ${props.className}`} style={props.style}>{/* 8*/}
      <img
        src={props.image}//8
        alt={props.alt}//8
        style={{ width: props.width, height: props.width }}//8
      />
    </div>
  );
};

export default Avatar;

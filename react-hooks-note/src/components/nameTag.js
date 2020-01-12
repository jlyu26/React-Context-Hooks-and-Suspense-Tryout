import React from 'react';

const nameTag = props => {
  return (
    <h3 style={props.style} className="name">
      {props.name || props.children}
    </h3>
  );
};

export default nameTag;

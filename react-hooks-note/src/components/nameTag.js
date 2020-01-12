import React from 'react';

const NameTag = props => {
  return (
    <>
      <h3 style={props.style} className="name">
        {props.name || props.children}
      </h3>
      {props.name === 'Tom' && <div>VIP</div>}
    </>
  );
};

export default NameTag;

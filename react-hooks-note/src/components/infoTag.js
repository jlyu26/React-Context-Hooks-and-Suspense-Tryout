import React from 'react';

const InfoTag = props => {
  const [key, value] = props.item;
  return (
    <div>
      {`${key}: ${value}`}
      <button name={key} onClick={props.onClick}>
        Remove
      </button>
    </div>
  );
};

export default InfoTag;

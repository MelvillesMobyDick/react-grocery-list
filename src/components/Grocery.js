import React from 'react';

const Grocery = (props) => {
  return (
    <li>
      {props.groceryName}  <button type="button" onClick={props.handleButtonClick}>Delete</button>
    </li>
  );
};


export default Grocery;

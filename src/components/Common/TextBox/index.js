import React from 'react';

import './style.css';

const TextBox = (props) => {
  return (
    <div className="text-field">
      <input type={props.type} name={props.name} id={props.id} value={props.value} placeholder={props.placeholder} autoFocus onChange={props.handleChange}/>
    </div>
  );
}

export default TextBox;

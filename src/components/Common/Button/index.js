import React from 'react';
import './style.css';

const Button = (props) => {
  return (
    <button type="submit" onClick={props.submitLogin}>{props.buttonName}</button>
  );
}

export default Button;

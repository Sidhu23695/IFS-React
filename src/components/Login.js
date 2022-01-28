import React, { useState, useContext } from 'react';
import { Navigate } from "react-router-dom";

import TextBox from './Common/TextBox/index';
import Button from './Common/Button/index';
import axios from 'axios'
import constant from '../resources/index'
import { IfsContext } from '../context/index';

export const Login = (props) => {
  const ifsContext = useContext(IfsContext);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  console.log('ifsContext.state.isLoggedIn', ifsContext.state.isLoggedIn);
  if (ifsContext.state.isLoggedIn) {
    return <Navigate to='/viewClients' />
  }

  const handleChange = (e, type) => {
    let regexp = /^[a-zA-Z ]+$/
    let targetValue = e.target.value;
    if (targetValue === '' || regexp.test(targetValue)) {
      if (type === 'username') {
        setUserName(targetValue);
      } else {
        setPassword(targetValue);
      }
    }
  }
  const submitLoginViaButton = async () => {
    console.log('userName', userName);
    console.log('password', password);
    let url = `${constant.API_URL}/login`;
    console.log('url', url);
    const response = await axios.get(url);
    if(response && response.data && !ifsContext.state.isLoggedIn) {
      console.log('response.data', response.data);
      ifsContext.dispatch({
        type: "loggedIn",
        payload: response.data
      });
    }
  }

  return (
    <div>
        <h2>Login Page</h2>
        <div>
            User Name: <TextBox type="text" name="username" id="username" value={userName} placeholder="User Name" handleChange={e => handleChange(e, 'username')} />
        </div>
        <div>
            Password: <TextBox type="password" name="password" id="password" value={password} placeholder="Password" handleChange={e => handleChange(e, 'password')} />
        </div>
        <div>
          <Button buttonName="Login" submitLogin={submitLoginViaButton} />
        </div>
    </div>
  );
}

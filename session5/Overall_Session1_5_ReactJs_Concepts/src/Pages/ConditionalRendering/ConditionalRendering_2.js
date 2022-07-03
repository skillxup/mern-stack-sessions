import React, { useState } from 'react';
import './ConditionalRendering.css';
import User from './User';
import Guest from './Guest';

function ConditionalRendering() {
  let [isLoggedIn, setIsLoggedIn] = useState('true');
  
  let login = () => {
    setIsLoggedIn(true);
  }

  let logout = () => {
    setIsLoggedIn(false);
  }

  if(isLoggedIn) {
    return <User fullName = "John Paul" clickLogout = {logout} />
  } else {
    return <Guest clickLogin = {login} />
  }
}

export default ConditionalRendering;
import React from 'react';
import './ConditionalRendering.css';
import User from './User';
import Guest from './Guest';

function ConditionalRendering() {
  let isLoggedIn = false;

  if(isLoggedIn) {
    return <User />
  } else {
    return <Guest />
  }
}

export default ConditionalRendering;
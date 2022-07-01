import React from 'react';
import './ConditionalRendering.css';
import User from './User';
import Guest from './Guest';

function ConditionalRendering() {
  let isLoggedIn = true;
  return(
  <React.Fragment>
      <h4>Online Users</h4>
      { isLoggedIn ? (<User />) : (<Guest />) }
  </React.Fragment>
  )
}

export default ConditionalRendering;
import React, { Component } from 'react';
import './ClassBasedLifeCycleHooks.css';
import TodoContainer from './TodoContainer';

class ClassBasedLifeCycleHooks extends Component {
  render() {
    return(
      <div>
          <h4> Class Based Life Cycle Hooks </h4>

          <hr />

          <TodoContainer />

      </div>
    ); 
  }
}

export default ClassBasedLifeCycleHooks;
import React from 'react';
import './ReduxCounter.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Counter from './Counter';

const initialState = {
  count: 0
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'INCREMENT': 
      return {
        count: state.count + 1
      }
    case 'DECREMENT': 
      if(state.count === 0) {
        return {
          count: state.count
        }
      } else {
        return {
          count: state.count - 1
        }
      }
    default: 
      return state;
  }
}

const store = createStore(reducer);

const ReduxCounter = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
)

export default ReduxCounter;
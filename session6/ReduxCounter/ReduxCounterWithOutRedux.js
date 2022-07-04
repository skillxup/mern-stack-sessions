import React, { Component } from 'react';
import './ReduxCounter.css';

class ReduxCounter extends Component {
  state = {
    count: 0
  };

  decrement = () => {
    if(this.state.count == 0) {
      this.setState({
        count: this.state.count
      })
    } else {
      this.setState({
        count: this.state.count - 1
      })
    }
  };

  increment = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return(
      <div>
        <h4>Redux with Counter</h4>

        <hr />

        <div className='row'>
          <div className='col-sm-12'>
            <button type='button' className='btn btn-primary me-3' onClick={this.decrement}> - </button>

            <span className='text-info lead me-3'>{this.state.count}</span>

            <button type='button' className='btn btn-primary' onClick={this.increment}> + </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ReduxCounter;
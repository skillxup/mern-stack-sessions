import React, { Component } from 'react';
import './RestApi.css';

class RestApi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  };
  
    render() {
      return(
        <div className='row'>
          <div className='col-sm-6 offset-sm-3'>

          </div>
        </div>
      );
    }
}

export default RestApi;
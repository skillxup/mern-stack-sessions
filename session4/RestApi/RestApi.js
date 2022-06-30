import React, { Component } from 'react';
import './RestApi.css';

class RestApi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  };
  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .then(response => {
        return response.json()
      }).then(result => {
        this.setState({
          posts: result
        })
      })
  };

  render() {
    return(
      <div className='row'>
        <div className='col-sm-6 offset-sm-3'>
          <table className='table table-bordered'>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
            {this.state.posts.map((post, index) => {
              return(<tr>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
              </tr>)
            })}
          </table>
        </div>
      </div>
    );
  }
}

export default RestApi;
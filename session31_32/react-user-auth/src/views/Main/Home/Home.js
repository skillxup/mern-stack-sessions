import React, { PropTypes as T } from 'react'
import {Jumbotron, Button} from 'react-bootstrap'
import AuthService from 'utils/AuthService'
import styles from './styles.module.css'
import { Link } from 'react-router'

export class Home extends React.Component {
  static contextTypes = {
    router: T.object
  }

  static propTypes = {
    auth: T.instanceOf(AuthService)
  }

  logout(){
    this.props.auth.logout()
    this.context.router.push('/home')
  }

  render() {
    const { isAuthenticated } = this.props.auth
    return (
      <Jumbotron>
        <h1>Welcome!</h1>
        <p>This app demonstrates how to add authentication to a React app.</p>
        
        { !isAuthenticated() && 
          <Link to={'/login'}> 
            <Button bsStyle="primary" bsSize="large">Log In</Button>
          </Link>
        }
        { isAuthenticated() &&
          <Button bsStyle="primary" bsSize="large" onClick={this.logout.bind(this)}>Log Out</Button>          
        }
      </Jumbotron>
    )
  }
}

export default Home

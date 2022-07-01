import React, { Component } from "react";

class User extends Component {
    render() {
        return(
            <React.Fragment>
                <h3>Welcome {this.props.fullName}</h3>
    
                <button type="button" className="btn btn-danger mb-2 me-2" onClick={this.props.clickLogout}> Logout </button>
    
            </React.Fragment>
        );
    }
}

export default User;
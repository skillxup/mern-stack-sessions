import React from "react";
import { NavLink } from "react-router-dom";

function NotFound() {
    return(
        <div className="jumbotron">
            <h1 className="display-4"> Page Not Found </h1>
            <p className="lead">The 
            <NavLink exact="true" to="/">
                page
            </NavLink>
            which are are seeing is invalid </p>
        </div>
    )
}

export default NotFound;
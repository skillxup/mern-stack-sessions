import React from "react"
import { NavLink } from "react-router-dom";

function NavBar() {
    const activeStyle = {
        color: "#f00"
    };

    return(
        <div className="navbar navbar-light bg-light">
            <NavLink activeStyle={activeStyle} to="/">
                Home 
            </NavLink>

            <NavLink exact="true" activeStyle={activeStyle} to="/posts">
                Posts 
            </NavLink>
        </div>
    );
}

export default NavBar;
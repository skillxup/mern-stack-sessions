import React, { Component } from "react";
import { Routes, Route, NavLink } from "react-router-dom";

import LoaderDemo from "./LoaderDemo/LoaderDemo";
import GenericContainerDemo from "./GenericContainerDemo/GenericContainerDemo";
import RefsDemo from "./RefsDemo/RefsDemo";
import CustomFormDemo from "./CustomFormDemo/CustomFormDemo";
import RequireAuthDemo from "./RequireAuthDemo/RequireAuthDemo";

class App extends Component {
  render() {
    return(
      <div>
        {/* Nav */}
        <nav className="">
          <ul className="nav">
            <li className="nav-item active">
              <NavLink activeClassName exact="true" to="/" className="nav-link">Home</NavLink>
            </li>

            <li className="nav-item">
              <NavLink activeClassName to="/loaderdemo" className="nav-link">Loader Demo</NavLink>
            </li>

            <li className="nav-item">
              <NavLink activeClassName to="/genericcontainer" className="nav-link">Generic Container</NavLink>
            </li>

            <li className="nav-item">
              <NavLink activeClassName to="/customform" className="nav-link">Custom Form</NavLink>
            </li>

            <li className="nav-item">
              <NavLink activeClassName to="/refsdemo" className="nav-link">Ref's Demo</NavLink>
            </li>

            <li className="nav-item">
              <NavLink activeClassName to="/requireauth" className="nav-link">Protected Routes Demo</NavLink>
            </li>

          </ul>
        </nav>

        {/* Content */}
        <div className="container">
          <div className="row">
            <div className="col-12">
            <Routes>
              <Route exact="true" path="/" element={<Home />} />
              <Route path="/loaderdemo" element={<LoaderDemo />} />
              <Route path="/genericcontainer" element={<GenericContainerDemo />} />
              <Route path="/customform" element={<CustomFormDemo />} />
              <Route path="/refsdemo" element={<RefsDemo />} />
              <Route path="/requireauth" element={<RequireAuthDemo />} />
            </Routes>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}

// Home
const Home = () => {
  return(
    <div>
      <h1>You are at: Home</h1>
    </div>
  )
}

export default App;
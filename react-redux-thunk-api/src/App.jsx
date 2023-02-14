import React from "react";
import Users from "./features/Users/Users";

function App() {
  return (
    <div className="container">
      <div className="d-flex border-bottom pt-2 pb-2 mb-5">
        <div className="p-2 flex-grow-1">Redux Store</div>
        <div>
          <div>
            <a href="#" className="nav-link">
              Users
            </a>
          </div>
        </div>
      </div>

      <Users />
    </div>
  );
}

export default App;

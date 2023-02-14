import React from "react";
// import CodeBox from "./CodeBox";

const AuthWebsite = ({ logout, user }) => {
  return (
    <div className="flex_column">
      <h4>Hello, {user}</h4>

      <div className="logout_button" onClick={() => logout()}>
        Logout
      </div>

      {/* <CodeBox authStatus={true} /> */}
    </div>
  );
};

export default AuthWebsite;

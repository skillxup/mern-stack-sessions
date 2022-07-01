import React from "react";

function Guest() {
    return(
        <React.Fragment>
            <h4>Welcome Guest</h4>

            <button type="button" className="btn btn-info mb-2 me-2 mt-2"> Login </button>

            <button type="button" className="btn btn-info mb-2 me-2 mt-2"> Signup </button>
        </React.Fragment>
    )
}

export default Guest;

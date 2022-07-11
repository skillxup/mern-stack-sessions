import React from "react";
import { connect } from "react-redux";

let Loading = ({loading}) => (
    loading ? (
        <div className="row">
            <div className="col-sm-12">
                <h4 className="text-info">loading starts...</h4>
            </div>
        </div>
    ) : null
)

const mapStateToProps = (state) => ({
    loading: state.loading
});

Loading = connect(
    mapStateToProps, 
    null
)(Loading);

export default Loading;
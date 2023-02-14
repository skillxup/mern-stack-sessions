import React, { Component } from "react";
import "./LoadIndicator.css";

const isEmpty = (prop) => (
    prop === null || 
    prop === undefined || 
    (prop.hasOwnProperty("length") && prop.length === 0) || 
    (prop.constructor === Object && Object.keys(prop).length === 0)
)

const LoadIndicatorHOC = (loadingProps) => (WrappedComponent) => {
    return class LoadIndicatorHOC extends Component {
        render() {
            return isEmpty(this.props[loadingProps] ? <div className="loader" /> : <WrappedComponent {...this.props} />)
        }
    }
}

export default LoadIndicatorHOC;
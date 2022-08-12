import React from "react";
import { connect } from "react-redux";
import { getNews } from "../actions";

let btnStyles = {
    backgroundColor: 'hotpink', 
    width: '190px', 
    height: '110px', 
    border: '1px solid black', 
    borderRadius: '8px', 
    margin: '10px auto', 
    fontSize: '18px'
};

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: false
        }
    };

    render() {
        return(
            <button 
                type="button" 
                style={!this.state.hover ? btnStyles : {...btnStyles, backgroundColor: 'darkmagenta'}}
                onMouseOver={() => {this.setState({
                    hover: true
                })}} 
                onMouseOut={() => {this.setState({
                    hover: false
                })}} 
                onClick={this.props.getNews} 
            >
                press to see the latest news 
            </button>
        );
    }
}

const mapDispatchToProps = {
    getNews: getNews
};

Button = connect(
    null, 
    mapDispatchToProps
)(Button);

export default Button;
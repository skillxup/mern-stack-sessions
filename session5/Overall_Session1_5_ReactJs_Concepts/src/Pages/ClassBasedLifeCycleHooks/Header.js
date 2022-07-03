import React, { Component } from "react";

class Header extends Component {
    componentDidUpdate(prevProps) {
        var red = Math.floor(Math.random() * 256);
        var green = Math.floor(Math.random() * 256);
        var blue = Math.floor(Math.random() * 256);

        var color = `rgb(${red}, ${green}, ${blue})`;

        if(prevProps.headerSpan !== this.props.headerSpan) {
            document.getElementById('inHd').innerHTML = 'Todos Concept!';
            document.getElementById('inHd').style.color = color;
        }
    };

    render() {
        return(
            <div className="mb-5">
                <h5>Working with - <span id="inHd"></span></h5>
            </div>
        );
    }
}

export default Header;
import React, { Component } from "react";

class TodosList extends Component {
    render() {
        return(
            <ul className="list-group list-group-flush">
                {this.props.items.map((item, index) => {
                    return(
                        <React.Fragment key={index}>
                            <li className="list-group-item bg-light d-flex justify-content-between">
                                {item}

                                <button type="button" className="btn btn-danger" onClick={() => {this.props.deleteTodo(index)}}> x </button>
                            </li>
                        </React.Fragment>
                    )
                })}
            </ul>
        );
    }
}

export default TodosList;
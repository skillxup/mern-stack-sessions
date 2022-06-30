import React, { Component } from "react";

class TodoItem extends Component {
    componentWillUnmount() {
        console.log('destroying the prop');
    };

    render() {
        const completedStyle = {
            color: '#0f0'
        };

        const { id, title, completed } = this.props.todo;
        return(
            <li className="list-group">
                <div className="row">
                    <div className="col-sm-2">
                        <input 
                            type="checkbox" 
                            checked={completed}
                            onChange={() => this.props.handleChangeProps(id)} 
                        />
                    </div>
                    <div className="col-sm-6">
                        <p className="lead" style={completed ? completedStyle : null}>{title}</p>
                    </div>
                    <div className="col-sm-4">
                        <button 
                            type="button" 
                            className="btn btn-danger"
                            onClick={() => this.props.deleteTodoProps(id)}     
                        > delete item </button>
                    </div>
                </div>
            </li>
        )
    }
}

export default TodoItem;
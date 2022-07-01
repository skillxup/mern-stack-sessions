import React, { Component } from "react";
import TodosList from "./TodosList";

class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputData: "", 
            todoItems: []
        }
    };

    changeTodoInput = (event) => {
        this.setState({
            inputData: event.target.value
        })
    };

    addTodo = (event) => {
        if(this.state.inputData !== "") {
            let newTodoItems = [
                ...this.state.todoItems, 
                this.state.inputData
            ];
            this.setState({
                todoItems: newTodoItems, 
                inputData: ""
            })
        }
    };

    deleteTodo = (index) => {
        let todoItems = [...this.state.todoItems];
        let newTodoItems = todoItems.filter((value, key) => {
            return index !== key 
        })
        this.setState({
            todoItems: newTodoItems
        })
    };

    render() {
        return(
            <div>
                <h1>Simple Todo App Crud Operations</h1>

                <hr />
                {/* adding new Todo item */}
                <div className="input-group">
                    <input type="text" placeholder="ex., wants to learn react" className="form-control" onChange={this.changeTodoInput} value={this.state.inputData} />

                    <div className="input-group-append">
                        <span className="btn btn-success" onClick={this.addTodo}> add (+) </span>
                    </div>
                </div>

                <hr />
                
                {/* displaying the items and with remove item */}
                <TodosList 
                    items = {this.state.todoItems} 
                    deleteTodo = {this.deleteTodo} />
            </div>
        );
    }
}

export default TodoApp;
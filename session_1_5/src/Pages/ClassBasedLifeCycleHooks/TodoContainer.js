import React, { Component } from 'react';
import axios from 'axios';
import { v4 as uuidv4} from 'uuid';
import TodosList from './TodosList';
import Header from './Header';
import InputTodo from './InputTodo';

class TodoContainer extends Component {
    state = {
        todos: [], 
        show: false
    }

    componentDidMount() {
        axios
            .get("https://jsonplaceholder.typicode.com/todos?_limit=5")
            .then(response => this.setState({
                todos: response.data
            }));
    };

    handleChange = id => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if(todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo;
            }), 
            show: !this.state.show
        })
    };

    delTodo = id => {
        this.setState({
            todos: [
                ...this.state.todos.filter(todo => {
                    return todo.id !== id
                })
            ]
        })
    };

    addTodoItem = title => {
        const newTodo = {
            id: uuidv4(), 
            title: title, 
            completed: false
        };
        this.setState({
            todos: [
                ...this.state.todos, newTodo
            ]
        })
    };

    render() {
        return(
            <div className='row'>
                <div className='col-sm-12'>
                    <Header 
                        headerSpan = {this.state.show} 
                    />
                    
                    <InputTodo 
                        addTodoProps = {this.addTodoItem} 
                    />

                    <TodosList 
                        todos = {this.state.todos} 
                        handleChangeProps = {this.handleChange} 
                        deleteTodoProps = {this.delTodo} 
                    />
                </div>
            </div>
        );
    }
}

export default TodoContainer;
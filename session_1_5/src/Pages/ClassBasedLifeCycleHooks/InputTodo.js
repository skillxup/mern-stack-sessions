import React, { Component } from 'react';

class InputTodo extends Component {
    state = {
        title: ''
    };

    onChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.addTodoProps(this.state.title);
        this.setState({
            title: ''
        })
    }

    render() {
        return(
            <div className='mb-5'>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type='text'
                        className='form-control mb-3' 
                        value={this.state.title} 
                        name='title' 
                        placeholder='ex., enter any title' 
                        onChange={this.onChange} 
                    />

                    <button type='submit' className='btn btn-success'> add new item </button>
                </form>
            </div>
        );
    }
}

export default InputTodo;
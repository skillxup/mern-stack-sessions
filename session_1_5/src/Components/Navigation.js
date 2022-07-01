import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navigation extends Component {
    render() {
        return(
        <ul className='nav nav-tabs'>
            <li className='nav-item'>
                <NavLink exact='true' activeClassname='active' to='/' className='nav-link'>
                    Home 
                </NavLink>
            </li>
            <li className='nav-item'>
                <NavLink activeClassname='active' to='/aboutus' className='nav-link'>
                    About Us 
                </NavLink>
            </li>
            <li className='nav-item'>
                <NavLink activeClassname='active' to='/products' className='nav-link'>
                   Products 
                </NavLink>
            </li>
            <li className='nav-item'>
                <NavLink activeClassname='active' to='/formvalidation' className='nav-link'>
                    Form Validation  
                </NavLink>
            </li>
            <li className='nav-item'>
                <NavLink activeClassname='active' to='/fileupload' className='nav-link'>
                    File Upload  
                </NavLink>
            </li>
            <li className='nav-item'>
                <NavLink activeClassname='active' to='/restapi' className='nav-link'>
                    Rest Api 
                </NavLink>
            </li>
            <li className='nav-item'>
                <NavLink activeClassname='active' to='/class-based-life-cycle-hooks' className='nav-link'>
                    Class LCH - ToDo
                </NavLink>
            </li>
            <li className='nav-item'>
                <NavLink activeClassname='active' to='/functional-based-life-cycle-hooks' className='nav-link'>
                    Functional LCH - Photos 
                </NavLink>
            </li>
            <li className='nav-item'>
                <NavLink activeClassname='active' to='/simple-todo-crud-operations' className='nav-link'>
                    ToDo Crud Ope.,
                </NavLink>
            </li>
            <li className='nav-item'>
                <NavLink activeClassname='active' to='/conditional-rendering' className='nav-link'>
                    Conditional Rendering
                </NavLink>
            </li>
        </ul>
        );
    }
}

export default Navigation;
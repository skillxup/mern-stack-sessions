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
        </ul>
        );
    }
}

export default Navigation;
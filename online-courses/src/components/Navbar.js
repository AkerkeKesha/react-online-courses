import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

const  Navbar = () => {
    return (
        <nav className = 'nav-wrapper grey darken-3'>  
            <div className='container'>        
                <a className='brand-logo center' href="#">KESHA</a>
                <ul className='left hide-on-med-and-down'>
                    <li><Link to='/'>Home</Link></li>
                    <li><NavLink to='/login'>Login</NavLink></li>
                    <li><NavLink to='/about'>About</NavLink></li>
                </ul>                
            </div> 
        </nav>
    );
}

export default withRouter(Navbar);
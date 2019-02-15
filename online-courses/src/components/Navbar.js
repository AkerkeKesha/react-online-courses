import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

const  Navbar = () => {
    return (
        <nav className = 'nav-wrapper grey darken-3'>  
            <div className='container'>   
                <Link className='brand-logo center' to="#">KESHA</Link>
                <ul className='left'>
                    <li><Link to='/'>Home</Link></li>
                    <li><NavLink to='/login'>Login</NavLink></li>
                    <li><NavLink to='/register'>Register</NavLink></li>
                    <li><NavLink to='/about'>About</NavLink></li>
                </ul>                
            </div> 
        </nav>
    );
}

export default withRouter(Navbar);
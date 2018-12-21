import React from 'react';

const  Navbar = () => {
    return (
        <nav className = 'nav-wrapper grey darken-3'>
            <div className='container'>
                <a className='brand-logo center'>KESHA</a>
                <ul className='left'>
                    <li>Schedule</li>
                    <li>Login</li>
                    <li>Register</li>
                    <li>About</li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
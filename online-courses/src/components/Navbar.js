import React from 'react';

const  Navbar = () => {
    return (
        <div className = 'nav-wrapper  container grey darken-3'>
            
                <a className='brand-logo center'>KESHA</a>
                <ul className='left hide-on-med-and-down'>
                    <li>Schedule</li>
                    <li>Login</li>
                    <li>Register</li>
                    <li>About</li>
                </ul>
                <a href="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                
          
        </div>
    );
}

export default Navbar;
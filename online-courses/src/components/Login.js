import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
    state = {
        email: '',
        password: ''
    }
    handleClick() {}
    render() {
        return (
            <div className='container white z-depth-2'>
                <ul className='tabs teal'>
                    <li className='tab col s3'><a className='white-text active' href='#login'>login</a></li>
                    <li className='tab col s3'><a className='white-text' href='#register'>register</a></li>
                </ul>
                <div id="login" className="col s12">
                    <form className='col s12'>
                        <div className='form-container'>
                            <h3 className='teal-text'>Hello</h3>
                            <div className='row'>
                                <div className='input-field col s12'>
                                    <input id='email' type='email' className='validate'/>
                                    <label for='email'>Email</label>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='input-field col s12'>
                                    <input id='password' type='password' className='validate'/>
                                    <label for='password'>Password</label>
                                </div>
                            </div>
                            <br/>
                            <center>
                                <button className='btn waves-effect waves-light teal' type="submit" name="action">Log in</button>
                            </center>
                            <br/>
                            <br/>
                        </div>
                        
                    </form>
                </div>
                <div id="register" className="col s12">
                    <form className='col s12'>
                        <div className='form-container'>
                            <h3 className='teal-text'>Welcome</h3>
                            <div className='row'>
                                <div className='input-field col s6'>
                                    <input id='first_name' type='text' className='validate'/>
                                    <label for='first_name'>First Name</label>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='input-field col s6'>
                                    <input id='last_name' type='text' className='validate'/>
                                    <label for='last_name'>Last Name</label>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='input-field col s12'>
                                    <input id='email' type='email' className='validate'/>
                                    <label for='email'>Email</label>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='input-field col s12'>
                                    <input id='password' type='password' className='validate'/>
                                    <label for='password'>Password</label>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='input-field col s12'>
                                    <input id='password-confirm' type='password' className='validate'/>
                                    <label for='password-confirm'>Confirm Password</label>
                                </div>
                            </div>
                            <br/>
                            <center>
                                <button className='btn waves-effect waves-light teal' type="submit" name="action">Register</button>
                            </center>
                            <br/>
                            <br/>
                        </div>
                        
                    </form>
                </div>

            </div>
        );
    }

}

export default Login;
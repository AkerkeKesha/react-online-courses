import React, { Component } from 'react';
import axios from 'axios';

class Registration extends Component {
    state = {
        username:'',
        email: '',
        password: ''
    }
    handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/auth/users/create', this.state)
            .then(res => {
                console.log(res.data);
            })
            .catch(error => {
                console.log(error.response);
            })
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }
    render() {
        return (
            <div className='container white z-depth-2'>
                <div id="register" className="col s12">
                    <form className='col s12' onSubmit ={this.handleSubmit}>
                        <div className='form-container'>
                            <h3 className='teal-text'>Welcome</h3>
                            <div className='row'>
                                <div className='input-field col s6'>
                                    <input id='username' type='text' className='validate'
                                    onChange = {this.handleChange} value={this.state.username}/>
                                    <label htmlFor='username'>User Name</label>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='input-field col s12'>
                                    <input id='email' type='email' className='validate'
                                    onChange = {this.handleChange} value={this.state.email}/>
                                    <label htmlFor='email'>Email</label>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='input-field col s12'>
                                    <input id='password' type='password' className='validate'
                                    onChange = {this.handleChange} value={this.state.password}/>
                                    <label htmlFor='password'>Password</label>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='input-field col s12'>
                                    <input id='password-confirm' type='password' className='validate'/>
                                    <label htmlFor='password-confirm'>Confirm Password</label>
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

export default Registration;
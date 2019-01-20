import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
    state = {
        email: '',
        password: ''
    }
    handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/auth/token/create')
            .then(res => console.log(res.data));
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }
    render() {
        return (
            <div className='container white z-depth-2'>
                <div id="login" className="col s12">
                    <form className='col s12' onSubmit ={this.handleSubmit}>
                        <div className='form-container'>
                            <h3 className='teal-text'>Hello</h3>
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
                            <br/>
                            <center>
                                <button className='btn waves-effect waves-light teal' type="submit" >Log in</button>
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
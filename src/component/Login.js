import React, { Component } from 'react';
import { connect } from 'react-redux';

class Login extends Component {

    render() {
        return (
            <div className='LoginScreen'>
                <div><img src='/DND.png' alt='DND' /></div>
                <a href="/login"><button className='LoginBut'>LOGIN</button></a>
            </div>
        )
    }
}

export default connect()(Login);
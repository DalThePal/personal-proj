import React, { Component } from 'react';

export default class Login extends Component {

    render() {
        return (
            <div className='LoginScreen'>
                <div><img src='/DND.png' alt='DND'/></div>
                <a href={ process.env.REACT_APP_LOGIN}><button className='LoginBut'>LOGIN</button></a>
            </div>
        )
    }
}
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {

    render() {
        return (
            <div className='Header'>
                <div className='logoDiv'>
                    <img src='DND-Icon.png' alt='DND' height='100%' />
                </div>
                <div className='Title'>{this.props.title}</div>
                <div className='ProfileDiv'>
                    <p>{this.props.user.nickname}</p>
                    <button><a href={'/logout'}>LOGOUT</a></button>
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Header);
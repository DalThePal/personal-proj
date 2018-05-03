import React, { Component } from 'react';
import { connect } from 'react-redux';
import { displayDashItem } from '../ducks/reducer';

class Header extends Component {

    render() {
        return (
            <div className='Header'>
                <div className='Title'>{this.props.title}</div>
                <div className='logoDiv'>
                    <img src='DND.png' alt='DND' height='100%' />
                </div>
                <div className='ProfileDiv'>
                    <button><a href={'/logout'}>LOGOUT</a></button>
                </div>
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Header);
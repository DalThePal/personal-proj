import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { displayDashItem } from '../ducks/reducer';

class Header extends Component {

    render() {
        return (
            <div className='Header'>
                <div className='linkDiv'>
                    <Link
                        to='/Home'
                        onClick={() => { this.props.displayDashItem(''); }}
                    ><img src='/monsters.png' height='50' width='50' />monsters
                    </Link>
                </div>
                <div className='logoDiv'>
                    <img src='DND.png' height='100%' />
                </div>
                <div className='ProfileDiv'>
                    <img src={this.props.user.picture} height='50' width='50' />
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
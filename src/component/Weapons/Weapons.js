import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToWeaponDash, getEquipment, displayDashItem } from '../../ducks/reducer';
import Weapon from '../Weapon/Weapon';
import { Link } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';

class Weapons extends Component {

    componentDidMount() {

        this.props.getEquipment();
    }

    componentDidUpdate() {
        if (this.props.displayItem) {
            console.log(this.props.displayItem)
            var elmnt = this.refs[this.props.displayItem];
            console.log(elmnt)
            elmnt.scrollIntoView();
        }
    }

    render() {
        const weapons = this.props.weapons.map((weapon, index) => {
            return (
                <div
                    className='WeaponDiv'
                    ref={weapon.name}
                    key={index}>
                    <Weapon

                        name={weapon.name}
                        url={weapon.url}
                        addToDash={this.props.addToWeaponDash}

                    />
                </div>
            )
        })

        return (
            <div className='Window'>
                <div className='Header'>
                <div className='linkDiv'>
                        <Link
                            to='/Home'
                            onClick={() => { this.props.displayDashItem(''); }}
                        ><img src='/weapons.png' height='50' width='50' />weapons
                    </Link>
                    </div>
                    <div className='logoDiv'>
                        <img src='DND.png' height='100%' />
                    </div>
                    <div className='ProfileDiv'>
                        <img src={this.props.user.picture} height='50' width='50'/>
                        <button><a href={'/logout'}>LOGOUT</a></button>
                    </div>
                </div>
                <div className='Body'>
                    <div className='Weapons'>
                        {weapons}
                    </div>
                    <Dashboard />
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        weapons: state.weapons,
        displayItem: state.displayItem,
        user: state.user
    }
}

export default connect(mapStateToProps, { addToWeaponDash, getEquipment, displayDashItem })(Weapons);
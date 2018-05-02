import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToWeaponDash, getEquipment, displayDashItem } from '../ducks/reducer';
import Weapon from './Weapon';
import { Link } from 'react-router-dom';
import Dashboard from './Dashboard';
import Header from './Header';

class Weapons extends Component {

    componentDidMount() {

        this.props.getEquipment();
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
                <Header/>
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
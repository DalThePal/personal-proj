import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToDash, getEquipment, displayDashItem } from '../ducks/reducer';
import Weapon from './Weapon';
import Dashboard from './Dashboard';
import Header from './Header';

class Weapons extends Component {

    componentDidMount() {

        this.props.getEquipment();
    }

    render() {
        const weapons = this.props.weapons.map((weapon, index) => {
            return (
                <Weapon
                    key={index}
                    name={weapon.name}
                    url={weapon.url}
                    addToDash={this.props.addToDash}
                />
            )
        })

        return (
            <div className='Window'>
                <Header title='weapons'/>
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

export default connect(mapStateToProps, { addToDash, getEquipment, displayDashItem })(Weapons);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../../duck/index';
import Weapon from './Weapon';
import Dashboard from '../Dashboard';
import Header from '../Header';

class Weapons extends Component {

    componentDidMount() {
        this.props.dispatch(actions.getEquipment());
    }

    addToDash(payload) {
        this.props.dispatch(actions.addToDash(payload));
    }

    render() {
        const weapons = this.props.weapons.map((weapon, index) => {
            return (
                <Weapon
                    key={index}
                    name={weapon.name}
                    url={weapon.url}
                    addToDash={this.addToDash.bind(this)}
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
        user: state.user
    }
}

export default connect(mapStateToProps)(Weapons);
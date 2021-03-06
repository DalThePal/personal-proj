import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../../duck/index';
import Weapon from './Weapon';
import Dashboard from '../dashboard/Dashboard';
import Header from '../Header';

class Weapons extends Component {

    componentDidMount() {
        this.props.getEquipment();
    }

    render() {

        const filteredWeapons = this.props.weapons.filter(weapon => {
            return weapon.name.toUpperCase().includes(this.props.search.toUpperCase());
        });

        const weapons = filteredWeapons.map((weapon, index) => {
            return (
                <Weapon
                    key={index}
                    name={weapon.name}
                    url={weapon.url}
                />
            );
        });

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

const mapStateToProps = (state) => {
    return {
        weapons: state.weapons,
        user: state.user,
        search: state.search
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getEquipment: () => dispatch(actions.getEquipment())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Weapons);
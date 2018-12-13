import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../../duck/index';
import Weapon from './Weapon';
import Dashboard from '../dashboard/Dashboard';
import Header from '../Header';

class Weapons extends Component {

    componentDidMount() {
        if (this.props.weapons.length < 1) {
            this.props.getEquipment();
        }
        this.props.getUser();
        this.scrollToElmnt();
    }

    componentDidUpdate() {
        this.scrollToElmnt();
    }

    scrollToElmnt() {
        if (this.props.displayDashItem) {
            var elmnt = this.refs[this.props.displayDashItem];
            elmnt.scrollIntoView({ behavior: 'smooth', block: 'center' });
            this.props.addDisplayDashItem(null);
        }
    }

    render() {

        const filteredWeapons = this.props.weapons.filter(weapon => {
            return weapon.name.toUpperCase().includes(this.props.search.toUpperCase());
        });

        const weapons = filteredWeapons.map((weapon, index) => {
            return (
                <div
                    className='weaponDiv'
                    ref={weapon.name}
                    key={index}
                >
                    <Weapon
                        name={weapon.name}
                        url={weapon.url}
                    />
                </div>
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
        search: state.search,
        displayDashItem: state.displayDashItem
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getEquipment: () => dispatch(actions.getEquipment()),
        getUser: () => dispatch(actions.getUser()),
        addDisplayDashItem: (payload) => dispatch(actions.addDisplayDashItem(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Weapons);
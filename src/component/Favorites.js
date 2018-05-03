import React, { Component } from 'react';
import Monster from './Monster';
import Spell from './Spell';
import Arm from './Arm';
import Weapon from './Weapon';
import Equip from './Equip';
import Mount from './Mount';
import Dashboard from './Dashboard';
import Header from './Header';
import { connect } from 'react-redux';
import { displayDashItem } from '../ducks/reducer';


class Favorites extends Component {

    componentDidMount() {

    }

    render() {
        const monsters = this.props.dash.map((monster, index) => {
            if (monster.type === 'monster') {
                return (
    
                    <Monster
                        key={index}
                        name={monster.name}
                        url={monster.url}
                        addToDash={this.props.addToDash}
                    />
    
                )
            } else return
        })

        const spells = this.props.dash.map((spell, index) => {
            if (spell.type === 'spell') {
                return (
    
                    <Spell
                        key={index}
                        name={spell.name}
                        url={spell.url}
                        addToDash={this.props.addToDash}
                    />
    
                )
            } else return
        })

        const armor = this.props.dash.map((arm, index) => {
            if (arm.type === 'arm') {
                return (
    
                    <Arm
                        key={index}
                        name={arm.name}
                        url={arm.url}
                        addToDash={this.props.addToDash}
                    />
    
                )
            } else return
        })

        const weapons = this.props.dash.map((weapon, index) => {
            if (weapon.type === 'weapon') {
                return (
    
                    <Weapon
                        key={index}
                        name={weapon.name}
                        url={weapon.url}
                        addToDash={this.props.addToDash}
                    />
    
                )
            } else return
        })

        const equipment = this.props.dash.map((equip, index) => {
            if (equip.type === 'equip') {
                return (
    
                    <Equip
                        key={index}
                        name={equip.name}
                        url={equip.url}
                        addToDash={this.props.addToDash}
                    />
    
                )
            } else return
        })

        const mounts = this.props.dash.map((mount, index) => {
            if (mount.type === 'mount') {
                return (
    
                    <Mount
                        key={index}
                        name={mount.name}
                        url={mount.url}
                        addToDash={this.props.addToDash}
                    />
    
                )
            } else return
        })

        return (
            <div className='Window'>
                <Header title='favorites'/>
                <div className='Body'>
                    <div className='Content'>
                        {monsters}
                        {spells}
                        {armor}
                        {weapons}
                        {equipment}
                        {mounts}
                    </div>
                    <Dashboard />
                </div>
            </div>
        )

    }
}

function mapStateToProps(state) {
    return {
        dash: state.dash,
        user: state.user
    }
}

export default connect(mapStateToProps, { displayDashItem })(Favorites);
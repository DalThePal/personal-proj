import React, { Component } from 'react';
import Monster from './monsters/Monster';
import Spell from './spells/Spell';
import Arm from './armor/Arm';
import UserArm from './armor/UserArm';
import Weapon from './weapons/Weapon';
import Equip from './equipment/Equip';
import Mount from './mounts/Mount';
import Dashboard from './dashboard/Dashboard';
import Header from './Header';
import { connect } from 'react-redux';


class Favorites extends Component {

    render() {
        const monsters = this.props.dash.map((monster, index) => {
            if (monster.type === 'monster') {
                return (
                    <Monster
                        key={index}
                        name={monster.name}
                        url={monster.url}
                    />
                )
            } else return null
        })

        const spells = this.props.dash.map((spell, index) => {
            if (spell.type === 'spell') {
                return (
                    <Spell
                        key={index}
                        name={spell.name}
                        url={spell.url}
                    />
                )
            } else return null
        })

        const armor = this.props.dash.map((arm, index) => {
            if (arm.type === 'arm') {
                return (
                    <Arm
                        key={index}
                        name={arm.name}
                        url={arm.url}
                    />
                )
            } else return null
        })

        const weapons = this.props.dash.map((weapon, index) => {
            if (weapon.type === 'weapon') {
                return (
                    <Weapon
                        key={index}
                        name={weapon.name}
                        url={weapon.url}
                    />
                )
            } else return null
        })

        const equipment = this.props.dash.map((equip, index) => {
            if (equip.type === 'equip') {
                return (
                    <Equip
                        key={index}
                        name={equip.name}
                        url={equip.url}
                    />
                )
            } else return null
        })

        const mounts = this.props.dash.map((mount, index) => {
            if (mount.type === 'mount') {
                return (
                    <Mount
                        key={index}
                        name={mount.name}
                        url={mount.url}
                    />
                )
            } else return null
        })

        if (this.props.displayDashItem.type) {
            switch (this.props.displayDashItem.type) {
                case 'monster':
                    return (
                        <div className='Window'>
                            <Header title='favorites' />
                            <div className='Body'>
                                <div className='Content'>
                                    <Monster
                                        name={this.props.displayDashItem.name}
                                        url={this.props.displayDashItem.url}
                                    />
                                </div>
                                <Dashboard />
                            </div>
                        </div>
                    )
                case 'spell':
                    return (
                        <div className='Window'>
                            <Header title='favorites' />
                            <div className='Body'>
                                <div className='Content'>
                                    <Spell
                                        name={this.props.displayDashItem.name}
                                        url={this.props.displayDashItem.url}
                                    />
                                </div>
                                <Dashboard />
                            </div>
                        </div>
                    )
                case 'arm':
                    return (
                        <div className='Window'>
                            <Header title='favorites' />
                            <div className='Body'>
                                <div className='Content'>
                                    <Arm
                                        name={this.props.displayDashItem.name}
                                        url={this.props.displayDashItem.url}
                                    />
                                </div>
                                <Dashboard />
                            </div>
                        </div>
                    )
                case 'userArm':
                    return (
                        <div className='Window'>
                            <Header title='favorites' />
                            <div className='Body'>
                                <div className='Content'>
                                    <UserArm
                                        name={this.props.displayDashItem.name}
                                        index={this.props.displayDashItem.index}
                                    />
                                </div>
                                <Dashboard />
                            </div>
                        </div>
                    )
                case 'weapon':
                    return (
                        <div className='Window'>
                            <Header title='favorites' />
                            <div className='Body'>
                                <div className='Content'>
                                    <Weapon
                                        name={this.props.displayDashItem.name}
                                        url={this.props.displayDashItem.url}
                                    />
                                </div>
                                <Dashboard />
                            </div>
                        </div>
                    )
                case 'equip':
                    return (
                        <div className='Window'>
                            <Header title='favorites' />
                            <div className='Body'>
                                <div className='Content'>
                                    <Equip
                                        name={this.props.displayDashItem.name}
                                        url={this.props.displayDashItem.url}
                                    />
                                </div>
                                <Dashboard />
                            </div>
                        </div>
                    )
                case 'mount':
                    return (
                        <div className='Window'>
                            <Header title='favorites' />
                            <div className='Body'>
                                <div className='Content'>
                                    <Mount
                                        name={this.props.displayDashItem.name}
                                        url={this.props.displayDashItem.url}
                                    />
                                </div>
                                <Dashboard />
                            </div>
                        </div>
                    )
                default:
                    return null
            }
        } else {
            return (
                <div className='Window'>
                    <Header title='favorites' />
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
}

function mapStateToProps(state) {
    return {
        dash: state.dash,
        user: state.user,
        displayDashItem: state.displayDashItem
    }
}

export default connect(mapStateToProps)(Favorites);
import React, { Component } from 'react';
import Monster from './monsters/Monster';
import Spell from './spells/Spell';
import Arm from './armor/Arm';
import Weapon from './weapons/Weapon';
import Equip from './equipment/Equip';
import Mount from './mounts/Mount';
import Dashboard from './Dashboard';
import Header from './Header';
import { connect } from 'react-redux';
import actions from '../duck/index';


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
        if (this.props.displayItem) {
            switch (this.props.displayItem.type) {
                case 'monster':
                    return (
                        <div className='Window'>
                            <Header title='favorites' />
                            <div className='Body'>
                                <div className='Content'>
                                    <Monster
                                        name={this.props.displayItem.name}
                                        url={this.props.displayItem.url}
                                        addToDash={this.props.addToDash}
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
                                        name={this.props.displayItem.name}
                                        url={this.props.displayItem.url}
                                        addToDash={this.props.addToDash}
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
                                        name={this.props.displayItem.name}
                                        url={this.props.displayItem.url}
                                        addToDash={this.props.addToDash}
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
                                        name={this.props.displayItem.name}
                                        url={this.props.displayItem.url}
                                        addToDash={this.props.addToDash}
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
                                        name={this.props.displayItem.name}
                                        url={this.props.displayItem.url}
                                        addToDash={this.props.addToDash}
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
                                        name={this.props.displayItem.name}
                                        url={this.props.displayItem.url}
                                        addToDash={this.props.addToDash}
                                    />
                                </div>
                                <Dashboard />
                            </div>
                        </div>
                    )
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
        displayItem: state.displayItem
    }
}

export default connect(mapStateToProps, actions)(Favorites);
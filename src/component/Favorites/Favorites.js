import React, { Component } from 'react';
import Monster from '../Monster/Monster';
import Spell from '../Spell/Spell';
import Arm from '../Arm/Arm';
import Weapon from '../Weapon/Weapon';
import Equip from '../Equip/Equip';
import Mount from '../Mount/Mount';
import Dashboard from '../Dashboard/Dashboard';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { displayDashItem } from '../../ducks/reducer';


class Favorites extends Component {

    componentDidMount() {

    }

    render() {
        console.log(this.props.monsters)
        const monsters = this.props.monsters.map((monster, index) => {
            console.log(monsters)
            return (
                <div
                    className='MonsterDiv'
                    ref={monster.name}
                    key={index}>
                    <Monster
                        name={monster.name}
                        url={monster.url}
                        addToDash={this.props.addToMonstDash}
                    />
                </div>
            )
        })

        const spells = this.props.spells.map((spell, index) => {
            return (
                <div
                    className='SpellDiv'
                    ref={spell.name}
                    key={index}>
                    <Spell

                        name={spell.name}
                        url={spell.url}
                        addToDash={this.props.addToSpellDash}

                    />
                </div>
            )
        })

        const armor = this.props.armor.map((arm, index) => {
            return (
                <div
                    className='ArmDiv'
                    ref={arm.name}
                    key={index}>
                    <Arm
                        name={arm.name}
                        url={arm.url}
                        addToDash={this.props.addToArmorDash}
                    />
                </div>
            )
        })

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

        const equipment = this.props.equipment.map((equip, index) => {
            return (
                <div
                    className='EquipDiv'
                    ref={equip.name}
                    key={index}>
                    <Equip
                        name={equip.name}
                        url={equip.url}
                        addToDash={this.props.addToEquipDash}
                    />
                </div>
            )
        })

        const mounts = this.props.mounts.map((mount, index) => {
            return (
                <div
                    className='MountDiv'
                    ref={mount.name}
                    key={index}>
                    <Mount
                        name={mount.name}
                        url={mount.url}
                        addToDash={this.props.addToMountDash}
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
                        >favorites
                    </Link>
                    </div>
                    <div className='logoDiv'>
                        <img src='DND.png' height='100%' />
                    </div>
                    <div className='ProfileDiv'>
                        <button><a href={'/logout'}>LOGOUT</a></button>
                    </div>
                </div>
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
        monsters: state.monstDash,
        spells: state.spellDash,
        armor: state.armorDash,
        weapons: state.weaponDash,
        equipment: state.equipDash,
        mounts: state.mountDash
    }
}

export default connect(mapStateToProps, { displayDashItem })(Favorites);
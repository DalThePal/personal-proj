import React, { Component } from 'react';
import DashItem from '../DashItem/DashItem';
import { connect } from 'react-redux';
import { remFromMountDash, remFromMonstDash, remFromSpellDash, remFromEquipDash, remFromWeaponDash, remFromArmorDash, displayDashItem } from '../../ducks/reducer';

class Dashboard extends Component {

    render() {
        const monstItems = this.props.monstDash.map((monster, index) => {
            return (
                <DashItem
                    key={index}
                    item={monster}
                    removeFromDash={this.props.remFromMonstDash}
                    link={'/monsters'}
                    displayDashItem={this.props.displayDashItem}

                />
            )
        })

        const spellItems = this.props.spellDash.map((spell, index) => {
            return (
                <DashItem
                    key={index}
                    item={spell}
                    removeFromDash={this.props.remFromSpellDash}
                    link={'/spells'}
                    displayDashItem={this.props.displayDashItem}
                />
            )
        })

        const armorItems = this.props.armorDash.map((arm, index) => {
            return (
                <DashItem
                    key={index}
                    item={arm}
                    removeFromDash={this.props.remFromArmorDash}
                    link={'/armor'}
                    displayDashItem={this.props.displayDashItem}
                />
            )
        })

        const weaponItems = this.props.weaponDash.map((weapon, index) => {
            return (
                <DashItem
                    key={index}
                    item={weapon}
                    removeFromDash={this.props.remFromWeaponDash}
                    link={'/weapons'}
                    displayDashItem={this.props.displayDashItem}
                />
            )
        })

        const equipItems = this.props.equipDash.map((equip, index) => {
            return (
                <DashItem
                    key={index}
                    item={equip}
                    removeFromDash={this.props.remFromEquipDash}
                    link={'/equipment'}
                    displayDashItem={this.props.displayDashItem}
                />
            )
        })

        const mountItems = this.props.mountDash.map((mount, index) => {
            return (
                <DashItem
                    key={index}
                    item={mount}
                    removeFromDash={this.props.remFromMountDash}
                    link={'/mounts'}
                    displayDashItem={this.props.displayDashItem}
                />
            )
        })

        return (
            <div className='Dashboard'>
                <div className='SectionTitle'>
                    MONSTERS
                </div>
                <div className='Items'>
                    {monstItems}
                </div>
                <div className='SectionTitle'>
                    SPELLS
                </div>
                <div className='Items'>
                    {spellItems}
                </div>
                <div className='SectionTitle'>
                    ARMOR
                </div>
                <div className='Items'>
                    {armorItems}
                </div>
                <div className='SectionTitle'>
                    WEAPONS
                </div>
                <div className='Items'>
                    {weaponItems}
                </div>
                <div className='SectionTitle'>
                    EQUIPMENT
                </div>
                <div className='Items'>
                    {equipItems}
                </div>
                <div className='SectionTitle'>
                    MOUNTS & VEHICLES
                </div>
                <div className='Items'>
                    {mountItems}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        monstDash: state.monstDash,
        spellDash: state.spellDash,
        armorDash: state.armorDash,
        weaponDash: state.weaponDash,
        equipDash: state.equipDash,
        mountDash: state.mountDash
    }
}

export default connect(mapStateToProps, { remFromMountDash, remFromMonstDash, remFromSpellDash, remFromArmorDash, remFromEquipDash, remFromWeaponDash, displayDashItem })(Dashboard);
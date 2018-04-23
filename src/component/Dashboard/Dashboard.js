import React, { Component } from 'react';
import DashItem from '../DashItem/DashItem';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
    getMountDash, remFromMountDash,
    getMonstDash, remFromMonstDash,
    getSpellDash, remFromSpellDash,
    getEquipDash, remFromEquipDash,
    getWeaponDash, remFromWeaponDash,
    getArmorDash, remFromArmorDash,
    displayDashItem, getUser
} from '../../ducks/reducer';

class Dashboard extends Component {

    componentDidMount() {
        this.props.getUser();
        this.props.getMonstDash();
        this.props.getSpellDash();
        this.props.getArmorDash();
        this.props.getWeaponDash();
        this.props.getEquipDash();
        this.props.getMountDash();
    }

    render() {
        const monstItems = this.props.monstDash.map((monster, index) => {
            return (
                <DashItem
                    key={index}
                    item={monster}
                    removeFromDash={this.props.remFromMonstDash}
                    dashType={'monster'}
                    link='/monsters'
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
                    dashType={'spell'}
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
                    dashType={'armor'}
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
                    dashType={'weapon'}
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
                    dashType={'equipment'}
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
                    dashType={'mount'}
                    link={'/mounts'}
                    displayDashItem={this.props.displayDashItem}
                />
            )
        })

        return (
            <div className='Dashboard'>
                <div className='displayButton'>
                    <Link to='/favorites' onClick={() => { this.props.displayDashItem(''); }}><button>Display all</button></Link>
                </div>
                <div className='SectionTitle'>
                    <Link to='/Monsters' onClick={() => { this.props.displayDashItem(''); }}>MONSTERS</Link>
                </div>
                <div className='Items'>
                    {monstItems}
                </div>
                <div className='SectionTitle'>
                    <Link to='/Spells' onClick={() => { this.props.displayDashItem(''); }}>SPELLS</Link>
                </div>
                <div className='Items'>
                    {spellItems}
                </div>
                <div className='SectionTitle'>
                    <Link to='/Armor' onClick={() => { this.props.displayDashItem(''); }}>ARMOR</Link>
                </div>
                <div className='Items'>
                    {armorItems}
                </div>
                <div className='SectionTitle'>
                    <Link to='/Weapons' onClick={() => { this.props.displayDashItem(''); }}>WEAPONS</Link>
                </div>
                <div className='Items'>
                    {weaponItems}
                </div>
                <div className='SectionTitle'>
                    <Link to='/Equipment' onClick={() => { this.props.displayDashItem(''); }}>EQUIPMENT</Link>
                </div>
                <div className='Items'>
                    {equipItems}
                </div>
                <div className='SectionTitle'>
                    <Link to='/Mounts' onClick={() => { this.props.displayDashItem(''); }}>MOUNTS & VEHICLES</Link>
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

export default connect(mapStateToProps, {
    getMountDash, remFromMountDash,
    getMonstDash, remFromMonstDash,
    getSpellDash, remFromSpellDash,
    getArmorDash, remFromArmorDash,
    getEquipDash, remFromEquipDash,
    getWeaponDash, remFromWeaponDash,
    displayDashItem, getUser
})(Dashboard);
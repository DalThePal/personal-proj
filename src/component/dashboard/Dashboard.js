import React, { Component } from 'react';
import DashItem from './DashItem';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from '../../duck';

class Dashboard extends Component {

    componentDidMount() {
        this.props.getDash();
    }

    render() {
        const { dash } = this.props;
        const monstItems = dash.map((monster, index) => {
            if (monster.type === 'monster') {
                return (
                    <DashItem
                        key={index}
                        item={monster}
                        dashType={'monster'}
                        link={'/Monsters'}
                    />
                )
            } else return null

        })

        const spellItems = dash.map((spell, index) => {
            if (spell.type === 'spell') {
                return (
                    <DashItem
                        key={index}
                        item={spell}
                        dashType={'spell'}
                        link={'/Spells'}
                    />
                )
            } else return null
        })

        const armorItems = dash.map((arm, index) => {
            if (arm.type === 'arm') {
                return (
                    <DashItem
                        key={index}
                        item={arm}
                        dashType={'armor'}
                        link={'/Armor'}
                    />
                )
            } else return null
        })

        const userArmorItems = dash.map((userArm, index) => {
            if (userArm.type === 'userArm') {
                return (
                    <DashItem
                        key={index}
                        item={userArm}
                        dashType={'userArm'}
                        link={'/Armor'}
                    />
                )
            } else return null
        })

        const weaponItems = dash.map((weapon, index) => {
            if (weapon.type === 'weapon') {
                return (
                    <DashItem
                        key={index}
                        item={weapon}
                        dashType={'weapon'}
                        link={'/Weapons'}
                    />
                )
            } else return null
        })

        const equipItems = dash.map((equip, index) => {
            if (equip.type === 'equip') {
                return (
                    <DashItem
                        key={index}
                        item={equip}
                        dashType={'equipment'}
                        link={'/Equipment'}
                    />
                )
            } else return null
        })

        const userEquipItems = dash.map((userEquip, index) => {
            if (userEquip.type === 'userEquip') {
                return (
                    <DashItem
                        key={index}
                        item={userEquip}
                        dashType={'userEquip'}
                        link={'/Equipment'}
                    />
                )
            } else return null
        })

        const mountItems = dash.map((mount, index) => {
            if (mount.type === 'mount') {
                return (
                    <DashItem
                        key={index}
                        item={mount}
                        dashType={'mount'}
                        link={'/Mounts'}
                    />
                )
            } else return null
        })

        const userMountItems = dash.map((userMount, index) => {
            if (userMount.type === 'userMount') {
                return (
                    <DashItem 
                        key={index}
                        item={userMount}
                        dashType={'userMount'}
                        link={'/Mounts'}
                    />
                )
            } else return null
        })

        return (
            <div className='Dashboard'>
                <div className='displayButton'>
                    <Link to='/Favorites'><button onClick={() => this.props.displayDashItem(null)}>Display all</button></Link>
                </div>
                <div className='SectionTitle'>
                    <Link to='/Monsters'>MONSTERS</Link>
                </div>
                <div className='Items'>
                    {monstItems}
                </div>
                <div className='SectionTitle'>
                    <Link to='/Spells'>SPELLS</Link>
                </div>
                <div className='Items'>
                    {spellItems}
                </div>
                <div className='SectionTitle'>
                    <Link to='/Armor'>ARMOR</Link>
                </div>
                <div className='Items'>
                    {armorItems}
                    {userArmorItems}
                </div>
                <div className='SectionTitle'>
                    <Link to='/Weapons'>WEAPONS</Link>
                </div>
                <div className='Items'>
                    {weaponItems}
                </div>
                <div className='SectionTitle'>
                    <Link to='/Equipment'>EQUIPMENT</Link>
                </div>
                <div className='Items'>
                    {equipItems}
                    {userEquipItems}
                </div>
                <div className='SectionTitle'>
                    <Link to='/Mounts'>MOUNTS & VEHICLES</Link>
                </div>
                <div className='Items'>
                    {mountItems}
                    {userMountItems}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dash: state.dash,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getDash: () => dispatch(actions.getDash()),
        displayDashItem: (payload) => dispatch(actions.displayDashItem(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
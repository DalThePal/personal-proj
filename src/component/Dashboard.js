import React, { Component } from 'react';
import DashItem from './DashItem';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from '../duck';

class Dashboard extends Component {

    componentDidMount() {
        this.props.dispatch(actions.getDash());
    }

    remFromDash(payload) {
        this.props.dispatch(actions.remFromDash(payload));
    }

    displayDashItem(payload) {
        this.props.dispatch(actions.displayDashItem(payload));
    }

    render() {
        console.log(this.props.dash)
        const monstItems = this.props.dash.map((monster, index) => {
            if (monster.type === 'monster') {
                return (
                    <DashItem
                        key={index}
                        item={monster}
                        removeFromDash={this.remFromDash.bind(this)}
                        dashType={'monster'}
                        displayDashItem={this.displayDashItem.bind(this)}
                        link={'/Monsters'}

                    />
                )
            } else return

        })

        const spellItems = this.props.dash.map((spell, index) => {
            if (spell.type === 'spell') {
                return (
                    <DashItem
                        key={index}
                        item={spell}
                        removeFromDash={this.remFromDash.bind(this)}
                        dashType={'spell'}
                        displayDashItem={this.displayDashItem.bind(this)}
                        link={'/Spells'}
                    />
                )
            } else return
        })

        const armorItems = this.props.dash.map((arm, index) => {
            if (arm.type === 'arm') {

                return (
                    <DashItem
                        key={index}
                        item={arm}
                        removeFromDash={this.remFromDash.bind(this)}
                        dashType={'armor'}
                        displayDashItem={this.displayDashItem.bind(this)}
                        link={'/Armor'}
                    />
                )
            } else return
        })

        const weaponItems = this.props.dash.map((weapon, index) => {
            if (weapon.type === 'weapon') {
                return (
                    <DashItem
                        key={index}
                        item={weapon}
                        removeFromDash={this.remFromDash.bind(this)}
                        dashType={'weapon'}
                        displayDashItem={this.displayDashItem.bind(this)}
                        link={'/Weapons'}
                    />
                )

            } else return
        })

        const equipItems = this.props.dash.map((equip, index) => {

            if (equip.type === 'equip') {

                return (
                    <DashItem
                        key={index}
                        item={equip}
                        removeFromDash={this.remFromDash.bind(this)}
                        dashType={'equipment'}
                        displayDashItem={this.displayDashItem.bind(this)}
                        link={'/Equipment'}
                    />
                )
            } else return
        })

        const mountItems = this.props.dash.map((mount, index) => {
            if (mount.type === 'mount') {
                return (
                    <DashItem
                        key={index}
                        item={mount}
                        removeFromDash={this.remFromDash.bind(this)}
                        dashType={'mount'}
                        displayDashItem={this.displayDashItem.bind(this)}
                        link={'/Mounts'}
                    />
                )

            } else return
        })

        return (
            <div className='Dashboard'>
                <div className='displayButton'>
                    <Link to='/Favorites'><button>Display all</button></Link>
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
                </div>
                <div className='SectionTitle'>
                    <Link to='/Mounts'>MOUNTS & VEHICLES</Link>
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
        dash: state.dash
    }
}

export default connect(mapStateToProps)(Dashboard);
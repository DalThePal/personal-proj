import React, { Component } from 'react';
import DashItem from './DashItem';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from '../duck';

class Dashboard extends Component {


    componentDidMount() {
        actions.getDash();
    }

    render() {
        console.log(this.props.dash)
        const monstItems = this.props.dash.map((monster, index) => {
            if (monster.type === 'monster') {
                return (
                    <DashItem
                        key={index}
                        item={monster}
                        removeFromDash={this.props.remFromDash}
                        dashType={'monster'}
                        link={'/Monsters'}
                        displayDashItem={this.props.displayDashItem}

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
                        removeFromDash={this.props.remFromDash}
                        dashType={'spell'}
                        link={'/Spells'}
                        displayDashItem={this.props.displayDashItem}
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
                        removeFromDash={this.props.remFromDash}
                        dashType={'armor'}
                        link={'/Armor'}
                        displayDashItem={this.props.displayDashItem}
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
                        removeFromDash={this.props.remFromDash}
                        dashType={'weapon'}
                        link={'/Weapons'}
                        displayDashItem={this.props.displayDashItem}
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
                        removeFromDash={this.props.remFromDash}
                        dashType={'equipment'}
                        link={'/Equipment'}
                        displayDashItem={this.props.displayDashItem}
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
                        removeFromDash={this.props.remFromDash}
                        dashType={'mount'}
                        link={'/Mounts'}
                        displayDashItem={this.props.displayDashItem}
                    />
                )

            } else return
        })

        return (
            <div className='Dashboard'>
                <div className='displayButton'>
                    <Link to='/Favorites' onClick={() => { this.props.displayDashItem(''); }}><button>Display all</button></Link>
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
        dash: state.dash
    }
}

export default connect(mapStateToProps, actions)(Dashboard);
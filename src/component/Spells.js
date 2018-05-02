import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToSpellDash, getSpells, displayDashItem } from '../ducks/reducer';
import Spell from './Spell';
import { Link } from 'react-router-dom';
import Dashboard from './Dashboard';
import Header from './Header';

class Spells extends Component {

    componentDidMount() {
        this.props.getSpells();
    }

    render() {
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

        return (
            <div className='Window'>
                <Header/>
                <div className='Body'>
                    <div className='Spells'>
                        {spells}
                    </div>
                    <Dashboard />
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        spells: state.spells,
        displayItem: state.displayItem,
        user: state.user
    }
}

export default connect(mapStateToProps, { addToSpellDash, getSpells, displayDashItem })(Spells);
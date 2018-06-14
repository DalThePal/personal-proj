import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../ducks/index';
import Spell from './Spell';
import Dashboard from '../Dashboard';
import Header from '../Header';

class Spells extends Component {

    componentDidMount() {
        this.props.getSpells();
    }

    render() {
        const spells = this.props.spells.map((spell, index) => {
            return (
                <Spell
                    key={index}
                    name={spell.name}
                    url={spell.url}
                    addToDash={this.props.addToDash}
                />
            )
        })

        return (
            <div className='Window'>
                <Header title='spells'/>
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

export default connect(mapStateToProps, actions)(Spells);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../../duck/index';
import Spell from './Spell';
import Dashboard from '../Dashboard';
import Header from '../Header';

class Spells extends Component {

    componentDidMount() {
        this.props.dispatch(actions.getSpells());
    }

    addToDash(payload) {
        this.props.dispatch(actions.addToDash(payload));
    }

    render() {
        const spells = this.props.spells.map((spell, index) => {
            return (
                <Spell
                    key={index}
                    name={spell.name}
                    url={spell.url}
                    addToDash={this.addToDash.bind(this)}
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
        user: state.user
    }
}

export default connect(mapStateToProps)(Spells);
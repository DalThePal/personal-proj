import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../../duck/index';
import Spell from './Spell';
import Dashboard from '../dashboard/Dashboard';
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

const mapStateToProps = (state) => {
    return {
        spells: state.spells,
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getSpells: () => dispatch(actions.getSpells())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Spells);
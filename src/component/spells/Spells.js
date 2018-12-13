import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../../duck/index';
import Spell from './Spell';
import Dashboard from '../dashboard/Dashboard';
import Header from '../Header';

class Spells extends Component {

    componentDidMount() {
        if (this.props.spells.length < 1) {
            this.props.getSpells();
        }
        this.props.getUser();
        this.scrollToElmnt();
    }

    componentDidUpdate() {
        this.scrollToElmnt();
    }

    scrollToElmnt() {
        console.log(this.props.displayDashItem)
        if (this.props.displayDashItem) {
            var elmnt = this.refs[this.props.displayDashItem];
            elmnt.scrollIntoView({ behavior: 'smooth', block: 'center' });
            this.props.addDisplayDashItem(null);
        }
    }

    render() {

        const filteredSpells = this.props.spells.filter(spell => {
            return spell.name.toUpperCase().includes(this.props.search.toUpperCase());
        });

        const spells = filteredSpells.map((spell, index) => {
            return (
                <div
                    className='spellDiv'
                    ref={spell.name}
                    key={index}
                >
                    <Spell
                        name={spell.name}
                        url={spell.url}
                    />
                </div>
            );
        });

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
        user: state.user,
        search: state.search,
        displayDashItem: state.displayDashItem
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getSpells: () => dispatch(actions.getSpells()),
        getUser: () => dispatch(actions.getUser()),
        addDisplayDashItem: (payload) => dispatch(actions.addDisplayDashItem(payload))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Spells);
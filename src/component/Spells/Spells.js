import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToSpellDash, getSpells, displayDashItem } from '../../ducks/reducer';
import Spell from '../Spell/Spell';
import { Link } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';

class Spells extends Component {

    componentDidMount() {
        this.props.getSpells();
    }

    componentDidUpdate() {
        if (this.props.displayItem) {
            console.log(this.props.displayItem)
            var elmnt = this.refs[this.props.displayItem];
            console.log(elmnt)
            elmnt.scrollIntoView();
        }
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
                <div className='Header'>
                    <div className='linkDiv'>
                        <Link
                            to='/Home'
                            onClick={() => { this.props.displayDashItem(''); }}
                        ><img src='/spells.png' height='50' width='50' />spells
                    </Link>
                    </div>
                    <div className='logoDiv'>
                        <img src='DND.png' height='100%' />
                    </div>
                    <div className='ProfileDiv'>
                        <img src={this.props.user.picture} height='50' width='50'/>
                        <button><a href={'/logout'}>LOGOUT</a></button>
                    </div>
                </div>
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
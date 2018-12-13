import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../../duck';
import Monster from './Monster';
import Header from '../Header';
import Dashboard from '../dashboard/Dashboard';

class Monsters extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    componentDidMount() {
        if (this.props.monsters.length < 1) {
            this.props.getMonsters();
        }
        if (this.props.spells.length < 1) {
            this.props.getSpells();
        }
        if (this.props.equipment.length < 1) {
            this.props.getEquipment();
        }
        this.props.getUser();
        this.scrollToElmnt();
    }

    componentDidUpdate() {
        this.scrollToElmnt();
    }

    scrollToElmnt() {
        if (this.props.displayDashItem) {
            var elmnt = this.refs[this.props.displayDashItem];
            elmnt.scrollIntoView({behavior: 'smooth', block: 'center'});
            this.props.addDisplayDashItem(null);
        }
    }

    render() {

        const filteredMonsters = this.props.monsters.filter(monster => {
            return monster.name.toUpperCase().includes(this.props.search.toUpperCase())
        });

        const monsters = filteredMonsters.map((monster, index) => {
            return (
                <div
                    className='monsterDiv'
                    ref={monster.name}
                    key={index}
                >
                    <Monster
                        name={monster.name}
                        url={monster.url}
                    />
                </div>
            );
        })

        return (
            <div className='Window'>
                <Header title='monsters' />
                <div className='Body'>
                    <div className='Monsters'>
                        {monsters}
                    </div>

                    <Dashboard />
                </div>
            </div>
        )

    }
}

const mapStateToProps = (state) => {
    return {
        monsters: state.monsters,
        spells: state.spells,
        equipment: state.equipment,
        user: state.user,
        search: state.search,
        displayDashItem: state.displayDashItem
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getMonsters: () => dispatch(actions.getMonsters()),
        getSpells: () => dispatch(actions.getSpells()),
        getEquipment: () => dispatch(actions.getEquipment()),
        getUser: () => dispatch(actions.getUser()),
        addDisplayDashItem: (payload) => dispatch(actions.addDisplayDashItem(payload))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Monsters);
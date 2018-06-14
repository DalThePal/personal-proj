import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getUser, getMonsters, addToDash} from '../../duck/actions/';
import Monster from './Monster';
import Header from '../Header';
import Dashboard from '../Dashboard';

class Monsters extends Component {

    componentDidMount() {
        this.props.actions.getUser();
        this.props.actions.getMonsters();
    }


    render() {
        const monsters = this.props.monsters.map((monster, index) => {
            
            return (

                <Monster
                    key={index}
                    name={monster.name}
                    url={monster.url}
                    addToDash={this.props.addToDash}
                />

            )
        })


        return (
            <div className='Window' >
                <Header title='monsters'/>
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

function mapStateToProps(state) {
    return {
        monsters: state.monsters,
        displayItem: state.displayItem,
        user: state.user
    }
}

export default connect(mapStateToProps, {getUser, getMonsters, addToDash})(Monsters);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUser, addToDash, getMonsters, displayDashItem } from '../ducks/reducer';
import Monster from './Monster';
import Header from './Header';
import Dashboard from './Dashboard';

class Monsters extends Component {

    componentDidMount() {
        this.props.getUser();
        this.props.getMonsters();
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
                <Header />
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

export default connect(mapStateToProps, { getUser, addToDash, getMonsters, displayDashItem })(Monsters);
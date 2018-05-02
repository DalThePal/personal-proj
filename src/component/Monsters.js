import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUser, addToMonstDash, getMonsters, displayDashItem } from '../ducks/reducer';
import { Link } from 'react-router-dom';
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
            console.log(monster.name)
            return (
                <div
                    className='MonsterDiv'
                    ref={monster.name}
                    key={index}>
                    <Monster
                        name={monster.name}
                        url={monster.url}
                        addToDash={this.props.addToMonstDash}
                    />
                </div>
            )
        })


        return (
            <div className='Window'>
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

export default connect(mapStateToProps, { getUser, addToMonstDash, getMonsters, displayDashItem })(Monsters);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../../duck';
import Monster from './Monster';
import Header from '../Header';
import Dashboard from '../dashboard/Dashboard';

class Monsters extends Component {

    componentDidMount() {
        this.props.getMonsters();
        this.props.getUser();
    }

    render() {
        const monsters = this.props.monsters.map((monster, index) => {

            return (

                <Monster
                    key={index}
                    name={monster.name}
                    url={monster.url}
                />

            )
        })


        return (
            <div className='Window' >
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
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getMonsters: () => dispatch(actions.getMonsters()),
        getUser: () => dispatch(actions.getUser()),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Monsters);
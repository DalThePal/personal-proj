import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions } from '../../duck';
import Monster from './Monster';
import Header from '../Header';
import Dashboard from '../Dashboard';

class Monsters extends Component {

    componentDidMount() {
        this.props.dispatch(actions.getUser());
        this.props.dispatch(actions.getMonsters());
    }

    addToDash(obj) {
        this.props.dispatch(actions.addToDash(obj));
    }

    render() {
        console.log(this.props.monsters)
        const monsters = this.props.monsters.map((monster, index) => {

            return (

                <Monster
                    key={index}
                    name={monster.name}
                    url={monster.url}
                    addToDash={this.addToDash.bind(this)}
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

function mapStateToProps(state) {
    return {
        monsters: state.monsters,
        user: state.user
    }
}




export default connect(mapStateToProps)(Monsters);
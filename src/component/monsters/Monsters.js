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
        this.props.getMonsters();
        this.props.getUser();
        console.log(this)
        if (this.props.displayDashItem) {
            this.setState({
                displayDashItem: React.createRef()
            })
            window.scrollTo({
                top: this.state.displayDashItem,
                behavior: 'smooth'
            })
        }
    }

    render() {

        const filteredMonsters = this.props.monsters.filter(monster => {
            return monster.name.toUpperCase().includes(this.props.search.toUpperCase())
        });

        const monsters = filteredMonsters.map((monster, index) => {
            return (
                <Monster
                    key={index}
                    name={monster.name}
                    url={monster.url}
                    ref={this.monsterRef}
                />
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
        user: state.user,
        search: state.search,
        displayDashItem: state.displayDashItem
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getMonsters: () => dispatch(actions.getMonsters()),
        getUser: () => dispatch(actions.getUser()),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Monsters);
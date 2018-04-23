import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToMonstDash, getMonsters, displayDashItem } from '../../ducks/reducer';
import Monster from '../Monster/Monster';
import Dashboard from '../Dashboard/Dashboard';
import { Link } from 'react-router-dom';

class Monsters extends Component {

    componentDidMount() {
        this.props.getMonsters();

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
        const monsters = this.props.monsters.map((monster, index) => {
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
                <div className='Header'>
                    <div className='linkDiv'>
                        <Link
                            to='/Home'
                            onClick={() => { this.props.displayDashItem(''); }}
                        ><img src='/monsters.png' height='50' width='50' />monsters
                    </Link>
                    </div>
                    <div className='logoDiv'>
                        <img src='DND.png' height='100%' />
                    </div>
                    <div className='ProfileDiv'>
                        <button><a href={'/logout'}>LOGOUT</a></button>
                    </div>
                </div>
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
        displayItem: state.displayItem
    }
}

export default connect(mapStateToProps, { addToMonstDash, getMonsters, displayDashItem })(Monsters);
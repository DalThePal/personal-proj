import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../../duck';
import Arm from './Arm';
import UserArm from './UserArm';
import Dashboard from '../Dashboard';
import Header from '../Header';

class Armor extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            category: '',
            cost: '',
            armorclass: '',
            strength: '',
            stealth: '',
            weight: ''
        }
    }

    componentDidMount() {
        this.props.dispatch(actions.getEquipment());
        this.props.dispatch(actions.getUserArm());
    }

    addToDash(payload) {
        this.props.dispatch(actions.addToDash(payload));
    }

    remUserArm(payload) {
        this.props.dispatch(actions.remUserArm(payload));
    }

    editUserArm(payload) {
        this.props.dispatch(actions.editUserArm(payload));
    }

    createArm(payload) {
        this.props.dispatch(actions.createArm(payload));
    }

    render() {
        const armor = this.props.armor.map((arm, index) => {
            return (

                <Arm
                    key={index}
                    name={arm.name}
                    url={arm.url}
                    addToDash={this.addToDash.bind(this)}
                />

            )
        })

        const userArmor = this.props.userArmor.map((arm, index) => {
            return (

                <UserArm
                    key={index}
                    item={arm}
                    addToDash={this.props.addToUserDash}
                    remUserArm={this.remUserArm.bind(this)}
                    editUserArm={this.editUserArm.bind(this)}
                />

            )
        })

        return (
            <div className='Window'>
                <Header title='armor' />
                <div className='Body'>
                    <div className='Armor'>
                        {armor}
                        {userArmor}
                        <div className='createDiv'>
                            <input placeholder='name' onChange={(e) => this.setState({ name: e.target.value })} />
                            <input placeholder='category' onChange={(e) => this.setState({ category: e.target.value })} />
                            <input placeholder='cost' onChange={(e) => this.setState({ cost: e.target.value })} />
                            <input placeholder='armorClass' onChange={(e) => this.setState({ armorClass: e.target.value })} />
                            <input placeholder='strength' onChange={(e) => this.setState({ strength: e.target.value })} />
                            <input placeholder='stealth' onChange={(e) => this.setState({ stealth: e.target.value })} />
                            <input placeholder='weight' onChange={(e) => this.setState({ weight: e.target.value })} />
                            <button onClick={() => this.createArm(this.state)}>create</button>
                        </div>
                    </div>
                    <Dashboard />
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        armor: state.armor,
        userArmor: state.userArmor,
        user: state.user
    }
}

export default connect(mapStateToProps)(Armor);